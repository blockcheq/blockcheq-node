#!/bin/bash
set -u
set -e

echo "[*] Cleaning up temporary data directories"
rm -rf ~/blockcheq/data
rm -rf ~/blockcheq/logs
mkdir -p ~/blockcheq/logs

NODE_NAME="validator"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank2/UTC--* ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank2/nodekey1 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general1"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank2/UTC--* ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank2/nodekey2 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank2/tm1.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank2/tm1.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general2"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank2/UTC--* ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank2/nodekey3 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank2/tm2.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank2/tm2.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general3"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank2/UTC--* ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank2/nodekey4 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank2/tm3.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank2/tm3.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general4"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank2/UTC--* ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank2/nodekey5 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank2/tm4.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank2/tm4.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/permissioned-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

echo "[*] Initialization was completed successfully."
echo " "

set +u
set +e
