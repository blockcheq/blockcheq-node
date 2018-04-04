#!/bin/bash
set -u
set -e

CURRENT_HOST_IP="10.0.3.81"

echo "[*] Starting Constellation nodes"
NODE_NAME="general1"
DDIR1=~/blockcheq/data/"$NODE_NAME"/constellation
#CMD="constellation-node --url=https://10.0.3.81:9000/ --port=9000 --workdir=$DDIR --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://10.0.3.81:9001/"
#echo "$CMD >> ~/blockcheq/logs/constellation_$NODE_NAME.log 2>&1 &"
#$CMD 2>> "~/blockcheq/logs/constellation_$NODE_NAME.log" 2>&1 &
nohup constellation-node --url=https://$CURRENT_HOST_IP:9000/ --port=9000 --workdir=$DDIR1 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>~/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 3

NODE_NAME="general2"
DDIR2=~/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9001/ --port=9001 --workdir=$DDIR2 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>~/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

NODE_NAME="general3"
DDIR3=~/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9002/ --port=9002 --workdir=$DDIR3 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>~/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

NODE_NAME="general4"
DDIR4=~/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9003/ --port=9003 --workdir=$DDIR4 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>~/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

echo "[*] Starting Ethereum nodes"

set -v

ARGS="--syncmode full --mine --rpc --rpcaddr 0.0.0.0 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,quorum,istanbul"
nohup geth --datadir ~/blockcheq/data/validator $ARGS --rpcport 22000 --port 21000 --unlock 0 --password passwords.txt 2>>~/blockcheq/logs/validator.log &
sleep 2
PRIVATE_CONFIG=~/blockcheq/data/general1/constellation/node.ipc nohup geth --datadir ~/blockcheq/data/general1 $ARGS --rpcport 22001 --port 21001 2>>~/blockcheq/logs/general1.log &
PRIVATE_CONFIG=~/blockcheq/data/general2/constellation/node.ipc nohup geth --datadir ~/blockcheq/data/general2 $ARGS --rpcport 22002 --port 21002 2>>~/blockcheq/logs/general2.log &
PRIVATE_CONFIG=~/blockcheq/data/general3/constellation/node.ipc nohup geth --datadir ~/blockcheq/data/general3 $ARGS --rpcport 22003 --port 21003 2>>~/blockcheq/logs/general3.log &
PRIVATE_CONFIG=~/blockcheq/data/general4/constellation/node.ipc nohup geth --datadir ~/blockcheq/data/general4 $ARGS --rpcport 22004 --port 21004 2>>~/blockcheq/logs/general4.log &

set +v

echo
echo "All nodes started. See '~/blockcheq/logs' for logs, and run e.g. 'geth attach ~/blockcheq/data/validator/geth.ipc' to attach to the first Geth node."
