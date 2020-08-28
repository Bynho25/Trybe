// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

//     Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const array = [];
    for (let index = 0; index < 10; index += 1) {
      array.push(Math.floor(Math.random() * 50));
    }
    const itemsToSquare = array.map((item) => item * item);
    const sumItems = itemsToSquare.reduce((result, number) => result + number);
    if(sumItems < 8000) {
      resolve(sumItems);
    } else {
      reject(sumItems);
    }
  });
  myPromise
  .then((sumItems => [2, 3, 5, 10].map(number => sumItems / number)))
  .then((sumAgain) => sumAgain.reduce((acc, curr) => acc + curr))
  .then((result) => console.log(Math.floor(result)))
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};
fetchPromise();