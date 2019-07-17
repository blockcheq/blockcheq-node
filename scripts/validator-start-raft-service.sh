#!/bin/bash
#set -u
#set -e

CURRENT_HOST_IP="10.0.0.2"

echo "[*] Switching to scripts directory"
cd /home/blockcheq/blockcheq-node/scripts

echo "[*] Starting Constellation nodes"
NODE_NAME="general1"
DDIR1=/home/blockcheq/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9000/ --port=9000 --workdir=$DDIR1 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>/home/blockcheq/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 3

NODE_NAME="general2"
DDIR2=/home/blockcheq/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9001/ --port=9001 --workdir=$DDIR2 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>/home/blockcheq/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

NODE_NAME="general3"
DDIR3=/home/blockcheq/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9002/ --port=9002 --workdir=$DDIR3 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>/home/blockcheq/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

NODE_NAME="general4"
DDIR4=/home/blockcheq/blockcheq/data/"$NODE_NAME"/constellation
nohup constellation-node --url=https://$CURRENT_HOST_IP:9003/ --port=9003 --workdir=$DDIR4 --socket=node.ipc --publickeys=node.pub --privatekeys=node.key --othernodes=https://$CURRENT_HOST_IP:9000/ 2>>/home/blockcheq/blockcheq/logs/constellation_$NODE_NAME.log &
sleep 2

echo "[*] Starting Ethereum nodes"

#set -v

NETID=953575379
ARGS="--networkid $NETID --unlock 0 --password /home/blockcheq/blockcheq-node/scripts/passwords.txt --raft --rpc --rpcaddr 0.0.0.0 --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3,quorum --emitcheckpoints"

nohup geth --datadir /home/blockcheq/blockcheq/data/validator $ARGS --permissioned --raftport 50401 --rpcport 22000 --port 21000 2>>/home/blockcheq/blockcheq/logs/validator.log &
sleep 2
PRIVATE_CONFIG=/home/blockcheq/blockcheq/data/general1/constellation/node.ipc nohup geth --datadir /home/blockcheq/blockcheq/data/general1 $ARGS --permissioned --raftport 50402 --rpcport 22001 --port 21001 2>>/home/blockcheq/blockcheq/logs/general1.log &
PRIVATE_CONFIG=/home/blockcheq/blockcheq/data/general2/constellation/node.ipc nohup geth --datadir /home/blockcheq/blockcheq/data/general2 $ARGS --permissioned --raftport 50403 --rpcport 22002 --port 21002 2>>/home/blockcheq/blockcheq/logs/general2.log &
PRIVATE_CONFIG=/home/blockcheq/blockcheq/data/general3/constellation/node.ipc nohup geth --datadir /home/blockcheq/blockcheq/data/general3 $ARGS --permissioned --raftport 50404 --rpcport 22003 --port 21003 2>>/home/blockcheq/blockcheq/logs/general3.log &
PRIVATE_CONFIG=/home/blockcheq/blockcheq/data/general4/constellation/node.ipc nohup geth --datadir /home/blockcheq/blockcheq/data/general4 $ARGS --permissioned --raftport 50405 --rpcport 22004 --port 21004 2>>/home/blockcheq/blockcheq/logs/general4.log &

#set +v

echo
echo "All nodes started. See '/home/blockcheq/blockcheq/logs' for logs, and run e.g. 'geth attach /home/blockcheq/blockcheq/data/validator/geth.ipc' to attach to the first Geth node."
