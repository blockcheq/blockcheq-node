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
cp ~/blockcheq-node/data/keystore/key1 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore/key546 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore/keya28 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore/keyaa4 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore/key478 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore/key2 ~/blockcheq/data/"$NODE_NAME"/keystore/keyz2
cp ~/blockcheq-node/data/keystore/key3 ~/blockcheq/data/"$NODE_NAME"/keystore/keyz3
cp ~/blockcheq-node/data/keystore/key4 ~/blockcheq/data/"$NODE_NAME"/keystore/keyz4
cp ~/blockcheq-node/data/keys/nodekey1 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/istanbul-genesis.json

NODE_NAME="general1"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore/key2 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys/nodekey2 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys/tm1.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys/tm1.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/istanbul-genesis.json

NODE_NAME="general2"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore/key3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys/nodekey3 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys/tm2.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys/tm2.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/istanbul-genesis.json

NODE_NAME="general3"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore/key4 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys/nodekey4 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys/tm3.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys/tm3.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/istanbul-genesis.json

NODE_NAME="general4"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore/key5 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys/nodekey5 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys/tm4.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys/tm4.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/istanbul-genesis.json

echo "[*] Initialization was completed successfully."
echo " "

set +u
set +e
