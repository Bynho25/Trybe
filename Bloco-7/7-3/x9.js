const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, value) => {
  // recebe um array de palavras e uma palavra para encontrar
  // retorna a posição dessa palavra
  
  let output = -1;
  for (const i in words) {
    if (value === words[i]) {
      output = Number(i);
    }
  }
  return output
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);