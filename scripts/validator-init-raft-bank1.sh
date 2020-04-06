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
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T11-28-52.118528329Z--f04adea888e8ff4887d2e357e38b5bc1d7b9745c ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-11-13.540755676Z--a9f3712aa2a6d49fed3653a8aa5775eff13e56fc ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-22-25.598511257Z--d3f571de724305a3fea3d0fb982c9ccc4fd751c3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-27-14.223035359Z--98ade5f6588407c502a511b3261423baf84a2d92 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-32-30.308022586Z--524dc5ee09301219cf05465c25017200a52d4ce3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank1/nodekey1 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general1"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T11-28-52.118528329Z--f04adea888e8ff4887d2e357e38b5bc1d7b9745c ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-11-13.540755676Z--a9f3712aa2a6d49fed3653a8aa5775eff13e56fc ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-22-25.598511257Z--d3f571de724305a3fea3d0fb982c9ccc4fd751c3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-27-14.223035359Z--98ade5f6588407c502a511b3261423baf84a2d92 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-32-30.308022586Z--524dc5ee09301219cf05465c25017200a52d4ce3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank1/nodekey2 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank1/tm1.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank1/tm1.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general2"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T11-28-52.118528329Z--f04adea888e8ff4887d2e357e38b5bc1d7b9745c ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-11-13.540755676Z--a9f3712aa2a6d49fed3653a8aa5775eff13e56fc ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-22-25.598511257Z--d3f571de724305a3fea3d0fb982c9ccc4fd751c3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-27-14.223035359Z--98ade5f6588407c502a511b3261423baf84a2d92 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-32-30.308022586Z--524dc5ee09301219cf05465c25017200a52d4ce3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank1/nodekey3 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank1/tm2.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank1/tm2.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general3"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T11-28-52.118528329Z--f04adea888e8ff4887d2e357e38b5bc1d7b9745c ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-11-13.540755676Z--a9f3712aa2a6d49fed3653a8aa5775eff13e56fc ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-22-25.598511257Z--d3f571de724305a3fea3d0fb982c9ccc4fd751c3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-27-14.223035359Z--98ade5f6588407c502a511b3261423baf84a2d92 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-32-30.308022586Z--524dc5ee09301219cf05465c25017200a52d4ce3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank1/nodekey4 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank1/tm3.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank1/tm3.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

NODE_NAME="general4"
echo "[*] Configuring node $NODE_NAME"
mkdir -p ~/blockcheq/data/"$NODE_NAME"/{keystore,geth,constellation}
mkdir -p ~/blockcheq/data/"$NODE_NAME"/constellation/{data,keystore}
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T11-28-52.118528329Z--f04adea888e8ff4887d2e357e38b5bc1d7b9745c ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-11-13.540755676Z--a9f3712aa2a6d49fed3653a8aa5775eff13e56fc ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-22-25.598511257Z--d3f571de724305a3fea3d0fb982c9ccc4fd751c3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-27-14.223035359Z--98ade5f6588407c502a511b3261423baf84a2d92 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keystore-bank1/UTC--2020-04-03T12-32-30.308022586Z--524dc5ee09301219cf05465c25017200a52d4ce3 ~/blockcheq/data/"$NODE_NAME"/keystore
cp ~/blockcheq-node/data/keys-bank1/nodekey5 ~/blockcheq/data/"$NODE_NAME"/geth/nodekey
cp ~/blockcheq-node/data/keys-bank1/tm4.key ~/blockcheq/data/"$NODE_NAME"/constellation/node.key
cp ~/blockcheq-node/data/keys-bank1/tm4.pub ~/blockcheq/data/"$NODE_NAME"/constellation/node.pub
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/static-nodes.json
cp ~/blockcheq-node/data/static-nodes.json ~/blockcheq/data/"$NODE_NAME"/permissioned-nodes.json
geth --datadir ~/blockcheq/data/"$NODE_NAME" init ~/blockcheq-node/data/genesis.json

echo "[*] Initialization was completed successfully."
echo " "

set +u
set +e
