#!/bin/bash

CURRENT_HOST_IP=$(hostname -i)

function superuser {
  if ( type "sudo"  > /dev/null 2>&1 )
  then
    sudo $@
  else
    eval $@
  fi
}

function installNodeRH {
  if ( ! type "npm" > /dev/null 2>&1 )
  then
    echo "[*] Installing NodeJS for RedHat/Centos Linux distribution" 
    cd ~
    curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
    superuser yum install nodejs
  fi
}

function installNodeUbuntu {
  if ( ! type "npm" > /dev/null 2>&1 )
  then
    echo "[*] Installing NodeJS for Ubuntu Linux distribution" 
    cd ~
    superuser apt-get install curl
    curl -sL https://deb.nodesource.com/setup_12.x | superuser -E bash -
    superuser apt-get install -y nodejs
  fi
}

function installPm2 {
  if ( ! type "pm2" > /dev/null 2>&1 )
  then
    # echo "[*] Switching to blockcheq home directory" 
    # cd /home/blockcheq
    cd ~

    echo "[*] Installing Ethereum Network Intelligence API" 
    git clone https://github.com/ethereum/eth-net-intelligence-api
    cd eth-net-intelligence-api/
    npm install

    echo "[*] Installing PM2" 
    superuser npm install -g pm2

    superuser cp ~/blockcheq-node/scripts/eth-netstats-nodes.json .
  fi
}

function installEthNetstats {
  # echo "[*] Switching to blockcheq home directory" 
  # cd /home/blockcheq
  cd ~

  if [[ ! -f "./eth-netstats/package.json" ]]; then
    echo "[*] Installing Ethereum Network Stats Application" 
    git clone https://github.com/cubedro/eth-netstats
    cd eth-netstats/
    npm install
    superuser npm install -g grunt-cli

    echo "[*] Creating Ethereum Network Stats Application distribution" 
    grunt all
    npm install
    grunt

    echo "'Ethereum Network Stats Application' installed." 
  fi
}

function installService {

  echo "[*] Installing Ethereum Network Stats Service" 
  cd /lib/systemd/system
  superuser cp ~/blockcheq-node/scripts/eth-netstats.service .

  cd ~/blockcheq-node/scripts/
  superuser systemctl enable eth-netstats.service

  echo "'Ethereum Network Stats Service' installed." 
}

function startService {

  echo "[*] Starting Ethereum Network Stats Service" 
  cd ~/blockcheq-node/scripts/
  superuser systemctl start eth-netstats.service

  echo "'Ethereum Network Stats Service' started." 
}

function configureFirewall {

  echo "[*] Opening port 3000 in firewall" 
  cd ~/blockcheq-node/scripts/
  superuser firewall-cmd --zone=public --add-port=3000/tcp --permanent
  superuser firewall-cmd --reload
  
  echo "Firewall configured." 
}

function installEthMonitor {
  set -e

  OS=$(cat /etc/os-release | grep "^ID=" | sed 's/ID=//g' | sed 's\"\\g')
  if [ $OS = "centos" ] || [ $OS = "rhel" ]
  then
    installNodeRH
  elif [ $OS = "ubuntu" ];then
    installNodeUbuntu
  else
    echo 'This operating system is not yet supported'
    exit
  fi
  
  installPm2
  installEthNetstats
  installService
  startService
  configureFirewall
  
  set +e
}

installEthMonitor
echo "[*] Bootstrapping was completed successfully."
