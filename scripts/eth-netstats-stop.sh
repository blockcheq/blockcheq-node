#!/bin/bash
set -u
set -e

echo "[*] Switching to Ethereum Network Intelligence API directory" 
cd /home/boksgsadmin/eth-net-intelligence-api

echo "[*] Stopping Ethereum Network Intelligence API (Classic)" 
pm2 kill &>> ~/blockcheq/logs/eth-net-intelligence-api.log 
sleep 1

echo "[*] Switching to Ethereum Network Stats directory" 
cd /home/boksgsadmin/eth-netstats

echo "[*] Stopping Ethereum Network Stats Application" 
pkill -f node
sleep 1

#set -v
#set +v

echo
echo "'Ethereum Network Stats Application' stopped." 
set +e