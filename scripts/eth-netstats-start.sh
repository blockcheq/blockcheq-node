#!/bin/bash
set -u
set -e

#CURRENT_HOST_IP="10.0.3.83" 
CURRENT_HOST_IP=$(hostname -i)

echo "[*] Switching to Ethereum Network Intelligence API directory" 
cd /home/blockcheq/eth-net-intelligence-api

echo "[*] Starting Ethereum Network Intelligence API (Classic)" 
#pm2 start eth-netstats-nodes.json 2>>~/blockcheq/logs/eth-net-intelligence-api.log 
pm2 start eth-netstats-nodes.json > ~/blockcheq/logs/eth-net-intelligence-api.log 
sleep 2
#pm2 list &> ~/blockcheq/logs/eth-net-intelligence-api.log 

echo "[*] Switching to Ethereum Network Stats directory" 
cd /home/blockcheq/eth-netstats

echo "[*] Starting Ethereum Network Stats App" 
#set -v
#WS_SECRET=mysecret npm start 2>>~/blockcheq/logs/eth-netstats.log &
WS_SECRET=mysecret npm start &> ~/blockcheq/logs/eth-netstats.log &
sleep 2
#set +v

echo
echo "'Ethereum Network Stats Application' Up and Running." 
echo "Open the URL 'http://$CURRENT_HOST_IP:3000' in your browser to access the application" 
