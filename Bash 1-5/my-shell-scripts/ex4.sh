#!/bin/bash
PATH="/home/pablo/Documentos/Trybe/Bash 1-5/ex4.sh"
if [ "$PATH" -e ]
then
echo "O caminho $PATH esta habilitado"
fi
if [ -w "$PATH" ]
then 
echo "Você tem permissão para editar $PATH"
else
echo "Você não tem permissão para editar $PATH"
fi