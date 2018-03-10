#!/bin/bash
set -e

# Manage GOROOT variable
if [[ -z "$GOROOT" ]]; then

    echo "[*] Trying default $GOROOT. If the script fails please run $HOME/blockcheq-node/scripts/env_go.sh or configure GOROOT correctly"
    echo 'export GOROOT=/usr/local/go' >> $HOME/.bashrc
    echo 'export GOPATH=$HOME/blockcheq/workspace' >> $HOME/.bashrc
    echo 'export PATH=$GOROOT/bin:$GOPATH/bin:$PATH' >> $HOME/.bashrc
    export GOROOT=/usr/local/go
    export GOPATH=$HOME/blockcheq/workspace
    export PATH=$GOROOT/bin:$GOPATH/bin:$PATH

    echo "[*] GOROOT = $GOROOT, GOPATH = $GOPATH"

    mkdir -p "$GOPATH"/bin
    mkdir -p "$GOPATH"/src

fi

set +e