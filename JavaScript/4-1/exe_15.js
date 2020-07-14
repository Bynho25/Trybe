let salarioBruto = 3000;
let salarioLiquido = 0;
let descontoInss = 0;
let descontoIr = 0;
let parcelaIr = 0;
let salarioFinal = 0;

function calculaInss(salarioBruto) {
  if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    descontoInss = salarioBruto * (8 / 100);
    salarioLiquido = salarioBruto - descontoInss;
  } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    descontoInss = salarioBruto * (9 / 100);
    salarioLiquido = salarioBruto - descontoInss;
  } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    descontoInss = salarioBruto * (11 / 100);
    salarioLiquido = salarioBruto - descontoInss;
  } else if (salarioBruto > 5189.82) {
    salarioLiquido = salarioBruto - 570.88
  } else {
    console.log("Erro! Salário inválido");
  }
  return (salarioLiquido);
}
calculaInss(salarioBruto);
function descontaIr(salarioLiquido) {

  if (salarioLiquido <= 1903.98) {
    salarioFinal = salarioLiquido;
  } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    descontoIr = salarioLiquido * (7.5 / 100);
    parcelaIr = 142.8;
    salarioFinal = salarioLiquido - (descontoIr - parcelaIr);
  } else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    descontoIr = salarioLiquido * (15 / 100);
    parcelaIr = 354.8;
    salarioFinal = salarioLiquido - (descontoIr - parcelaIr);
  } else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    descontoIr = salarioLiquido * (22.5 / 100);
    parcelaIr = 636.13;
    salarioFinal = salarioLiquido - (descontoIr - parcelaIr);
  } else if (salarioLiquido > 4664.68) {
    descontoIr = salarioLiquido * (27.5 / 100);
    parcelaIr = 869.36;
    salarioFinal = salarioLiquido - (descontoIr - parcelaIr);
  } else {
    console.log("Erro! Salário inválido");
  }
  console.log(salarioFinal);
}
descontaIr(salarioLiquido);