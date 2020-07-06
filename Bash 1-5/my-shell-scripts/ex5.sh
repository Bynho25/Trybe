#!/bin/bash
echo "Digite um caminho"
read PATH
if [ -d "$PATH" ]
  then 
    echo "$PATH é um diretório"
elif [ -f "$PATH" ]
  then
    echo "$PATH é um arquivo"
else
  echo "$PATH é outra coisa"
fi