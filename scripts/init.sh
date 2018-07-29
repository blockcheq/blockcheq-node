#!/bin/bash
set -u
set -e

MESSAGE='Usage: init <mode> <node-name>
    mode: CURRENT_HOST_IP | auto | backup
    node-name: NODE_NAME (example: Blockcheq)'

if ( [ $# -ne 2 ] ); then
    echo "$MESSAGE"
    exit
fi

CURRENT_HOST_IP="$1"
NODE_NAME="$2"
NODE_TYPE='general'
# ACCOUNT_PASSWORD='garfield123'
ACCOUNT_PASSWORD=


if ( [ "auto" == "$1" -o "backup" == "$1" ]); then 
    echo "Autodiscovering public host IP ..."
    CURRENT_HOST_IP="$(dig +short myip.opendns.com @resolver1.opendns.com 2>/dev/null || curl -s --retry 2 icanhazip.com)"
    echo "Public host IP found: $CURRENT_HOST_IP"
fi

if ( [ "dockerfile" == "$1" ]); then 
    echo "Getting IP from environmental variable ..."
    CURRENT_HOST_IP=$HOST_IP
    echo "Public host IP found: $CURRENT_HOST_IP"
fi

if ( [ "backup" == "$1" ]); then 
    echo "Backing up current node keys ..."
    #Backup directory tree
    mkdir ~/blockcheq-keysBackup
    mkdir ~/blockcheq-keysBackup/data
    mkdir ~/blockcheq-keysBackup/data/geth
    mkdir ~/blockcheq-keysBackup/data/constellation
    echo "Saving constellation keys ..."
    cp -r ~/blockcheq/data/constellation/keystore ~/blockcheq-keysBackup/data/constellation/
    echo "Saving node keys ..."
    cp -r ~/blockcheq/data/keystore ~/blockcheq-keysBackup/data
    echo "Saving enode ID ..."
    cp ~/blockcheq/data/geth/nodekey ~/blockcheq-keysBackup/data/geth/nodekey
fi

PWD="$(pwd)"
CONSTELLATION_NODES=$(cat ../data/constellation-nodes.json)
STATIC_NODES=$(cat ../data/static-nodes.json)
PERMISSIONED_NODES=$(cat ../data/permissioned-nodes.json)

update_constellation_nodes() {
    NODE_IP="$1"
    CONSTELLATION_PORT="$2"
    URL=",
    \"http://$NODE_IP:$CONSTELLATION_PORT/\"
]"
    CONSTELLATION_NODES=${CONSTELLATION_NODES::-2}
    CONSTELLATION_NODES="$CONSTELLATION_NODES$URL"
    echo "$CONSTELLATION_NODES" > ~/blockcheq-node/data/constellation-nodes.json
}

update_nodes_list() {
    echo "Updating permissioned nodes..."

       ENODE=",
    \"$1\"
]"
    PERMISSIONED_NODES=${PERMISSIONED_NODES::-2}
    PERMISSIONED_NODES="$PERMISSIONED_NODES$ENODE"
    echo "$PERMISSIONED_NODES" > ~/blockcheq-node/data/permissioned-nodes.json

    echo "Updating static-nodes..."
    cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq-node/data/static-nodes.json
}


generate_conf() {
   #define parameters which are passed in.
   NODE_IP="$1"
   CONSTELLATION_PORT="$2"
   OTHER_NODES="$3"
   PWD="$4"

   #define the template.
   cat  << EOF
# Externally accessible URL for this node (this is what's advertised)
url = "http://$NODE_IP:$CONSTELLATION_PORT/"

# Port to listen on for the public API
port = $CONSTELLATION_PORT

# Socket file to use for the private API / IPC
socket = "$PWD/blockcheq/data/constellation/constellation.ipc"

# Initial (not necessarily complete) list of other nodes in the network.
# Constellation will automatically connect to other nodes not in this list
# that are advertised by the nodes below, thus these can be considered the
# "boot nodes."
othernodes = $OTHER_NODES

# The set of public keys this node will host
publickeys = ["$PWD/blockcheq/data/constellation/keystore/node.pub"]

# The corresponding set of private keys
privatekeys = ["$PWD/blockcheq/data/constellation/keystore/node.key"]

# Optional file containing the passwords to unlock the given privatekeys
# (one password per line -- add an empty line if one key isn't locked.)
passwords = "$PWD/blockcheq/data/passwords.txt"

# Where to store payloads and related information
storage = "$PWD/blockcheq/data/constellation/data"

# Verbosity level (each level includes all prior levels)
#   - 0: Only fatal errors
#   - 1: Warnings
#   - 2: Informational messages
#   - 3: Debug messages
verbosity = 2

EOF
}

echo "[*] Cleaning up temporary data directories."
rm -rf ~/blockcheq/data
rm -rf ~/blockcheq/logs/quorum*
mkdir -p ~/blockcheq/data/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/constellation/{data,keystore}
mkdir -p ~/blockcheq/logs

echo "$NODE_NAME" > ~/blockcheq/data/IDENTITY
echo "$NODE_TYPE" > ~/blockcheq/data/NODE_TYPE

# Creamos el fichero de passwords con la contraseña de las cuentas
# echo "garfield123" > ~/blockcheq/data/passwords.txt
echo "$ACCOUNT_PASSWORD"  > ~/blockcheq/data/passwords.txt

echo "[*] Initializing quorum"
if [[ "$CURRENT_HOST_IP" == "10.20.0.12" ]]; then
    # cp ~/blockcheq-node/data/keystore/UTC--2017-01-05T12-57-49.038440259Z--e97b27174703f8f1c6a417c0605380815f4e7aa4 ~/blockcheq/data/keystore
    cp ~/blockcheq-node/data/keystore/key1 ~/blockcheq/data/keystore
    cp ~/blockcheq-node/data/keys/nodekey1 ~/blockcheq/data/geth/nodekey
    cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/static-nodes.json
    cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/permissioned-nodes.json
    geth --datadir ~/blockcheq/data init ~/blockcheq-node/data/istanbul-genesis.json
    cd ~/blockcheq/data/geth
    ENODE_KEY=$(bootnode -nodekey nodekey -writeaddress)
else    
    geth --datadir ~/blockcheq/data init ~/blockcheq-node/data/istanbul-genesis.json
    cd ~/blockcheq/data/geth
    bootnode -genkey nodekey
    ENODE_KEY=$(bootnode -nodekey nodekey -writeaddress)
fi

if ( [ "backup" == "$1" ]); then
    ENODE_KEY=$(bootnode -nodekey ~/blockcheq-keysBackup/data/geth/nodekey -writeaddress)
fi

if ( [ "dockerfile" == "$1" ]); then
    ENODE_KEY=$(bootnode -nodekey ~/blockcheq-node/data/keys/data/geth/nodekey -writeaddress)
fi

echo "ENODE -> 'enode://${ENODE_KEY}@${CURRENT_HOST_IP}:21000?discport=0'"
if ( [ "backup" != "$1" ]); then
    update_nodes_list "enode://${ENODE_KEY}@${CURRENT_HOST_IP}:21000?discport=0"
fi
cd ~
# if [[ "$CURRENT_HOST_IP" == "10.20.0.12" ]]; then
#     cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/static-nodes.json
#     cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/permissioned-nodes.json
# else 
if [[ "$CURRENT_HOST_IP" != "10.20.0.12" ]]; then
    cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/permissioned-nodes.json
    cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/static-nodes.json
fi

if [[ "$CURRENT_HOST_IP" != "10.20.0.12" ]]; then
    echo  "     Definida contraseña por defecto para cuenta principal como: $ACCOUNT_PASSWORD."
    echo $ACCOUNT_PASSWORD > ./account_pass
    geth --datadir ~/blockcheq/data --password ./account_pass account new
    rm ./account_pass
fi

echo "[*] Initializing Constellation node."
if ( [ "backup" != "$1" ]); then
    update_constellation_nodes "${CURRENT_HOST_IP}" "9000"
fi
generate_conf "${CURRENT_HOST_IP}" "9000" "$CONSTELLATION_NODES" "${PWD}" > ~/blockcheq/data/constellation/constellation.conf
cd ~/blockcheq/data/constellation/keystore
cat ~/blockcheq/data/passwords.txt | constellation-node --generatekeys=node
echo "______"
cd ~


if ( [ "backup" == "$1" ]); then 
    echo "Recovering keys from backup ..."
    rm -rf ~/blockcheq/data/constellation/keystore
    rm -rf ~/blockcheq/data/keystore
    rm ~/blockcheq/data/geth/nodekey

    echo "Recovering constellation keys ..."
    cp -rf ~/blockcheq-keysBackup/data/constellation/keystore ~/blockcheq/data/constellation/
    echo "Recovering node keys ..."
    cp -rf ~/blockcheq-keysBackup/data/keystore ~/blockcheq/data/ 
    echo "Recovering enode ID ..."
    cp ~/blockcheq-keysBackup/data/geth/nodekey ~/blockcheq/data/geth/nodekey
    echo "Cleaning backup files ..."
    # rm -rf ~/blockcheq-keysBackup
fi

if ( [ "dockerfile" == "$1" ]); then 
    echo "Recovering keys saved in the repository ..."
    rm -rf ~/blockcheq/data/constellation/keystore
    rm -rf ~/blockcheq/data/keystore
    rm ~/blockcheq/data/geth/nodekey

    echo "Recovering constellation keys ..."
    cp -rf ~/blockcheq-node/data/keys/data/constellation/keystore ~/blockcheq/data/constellation/
    echo "Recovering node keys ..."
    cp -rf ~/blockcheq-node/data/keys/data/keystore ~/blockcheq/data/ 
    echo "Recovering enode ID ..."
    cp ~/blockcheq-node/data/keys/data/geth/nodekey ~/blockcheq/data/geth/nodekey

fi

echo "[*] Initialization was completed successfully."
echo " "
echo "      Update DIRECTORY.md from blockcheq-node repository and send a Pull Request."
echo "      Don't forget the .json files in data folder!."
echo " "

set +u
set +e
