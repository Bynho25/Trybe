#!/bin/bash

DIR=$1
if [ -d "$DIR" ]
  then
    FILES=`ls -l $DIR | wc -l`
    echo "O $DIR tem $((FILES-1)) arquivos
else 
  echo "O argumento $DIR não é um diretório
fi
