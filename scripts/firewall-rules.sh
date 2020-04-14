#!/bin/bash
set -u
set -e

sudo firewall-cmd --add-port=50401/tcp --permanent
sudo firewall-cmd --add-port=50401/udp --permanent
sudo firewall-cmd --add-port=50402/tcp --permanent
sudo firewall-cmd --add-port=50402/udp --permanent
sudo firewall-cmd --add-port=50403/tcp --permanent
sudo firewall-cmd --add-port=50403/udp --permanent
sudo firewall-cmd --add-port=50404/tcp --permanent
sudo firewall-cmd --add-port=50404/udp --permanent
sudo firewall-cmd --add-port=50405/tcp --permanent
sudo firewall-cmd --add-port=50405/udp --permanent
sudo firewall-cmd --add-port=21000/tcp --permanent
sudo firewall-cmd --add-port=21000/udp --permanent
sudo firewall-cmd --add-port=21001/tcp --permanent
sudo firewall-cmd --add-port=21001/udp --permanent
sudo firewall-cmd --add-port=21002/tcp --permanent
sudo firewall-cmd --add-port=21002/udp --permanent
sudo firewall-cmd --add-port=21003/tcp --permanent
sudo firewall-cmd --add-port=21003/udp --permanent
sudo firewall-cmd --add-port=21004/tcp --permanent
sudo firewall-cmd --add-port=21004/udp --permanent

set +u
set +e