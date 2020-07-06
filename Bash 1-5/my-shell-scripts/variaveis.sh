#!bin/bash
#Variavel começa com $
echo "Qual o seu nome?"
read NOME
echo "Qual sua idade?"
read IDADE
VARIAVEL=`whoami`
echo "Meu nome é: "$NOME
echo "Tenho "$IDADE " anos"
echo "Estou logado no usuário `whoami`"
echo "Estou no diretório `pwd`"
