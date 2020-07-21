// function verificaPalindromo (palavra) {
//   for (let i = 0; i < palavra.length; i++) {
//     if (palavra [i] === palavra [palavra.length - 1]) {
//       console.log ("A");

//     }
//   }
// }
// verificaPalindromo ("ana");

// Função recebe um array de números e precisa retornar o maior deles
// Percorrer o array
// Encontrar o maior valor e armazenar na variável
function maiorValor (conjunto) {
  let maior = 0;
  for (let i in conjunto) {
    if (conjunto[maior] < conjunto [i]) {
      maior = i;
    }
  }
  return maior;
}

console.log (maiorValor ([3, 4, 5, 6]));

function menorValor (conjunto) {
  let menor = 0;
  for (let i in conjunto) {
    if (conjunto [i] < conjunto [menor]) {
      menor = i;
    }
  }
  return menor;
}

console.log (menorValor ([3, 4, 5, 6]));

function maiorNome (conjunto) {
  let maior = conjunto [0];
  for (let index in conjunto) {
    if (conjunto.length < conjunto[index].length) {
      maior = conjunto[index];
    }
  }
  return maior;
}

console.log (maiorNome (['Maria', 'Jose', 'Pablo', 'Debora']));

// function repetido (conjunto) {
//   let repetido = 0;
//   let cont = 0;
//   for (index in conjunto) {

//   }
// }

function somatorio (numero) {
  let soma = 0;
  for (let i = 0; i <= numero; i++){
    soma = soma + i;
  }
  return soma;
}

console.log (somatorio (4));