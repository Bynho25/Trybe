#bin/bash
echo "Qual a sua idade?"
read IDADE
if [ "$IDADE" -ge "18" ]
then
echo "$IDADE"
echo "Já pode ser preso"
else
echo "Ainda não pode ser preso"
fi