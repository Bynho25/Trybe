const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  // recebe um array de palavras
  // retorna quantidade de letras de cada palavra
  const output = [];
  for (let i = 0; i < words.length; i++) {
    output.push(words[i].length);
  }
  return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);