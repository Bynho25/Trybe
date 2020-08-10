const biggerWord = (phrase) => {
  let words = phrase.split (' ');
  let bigWord = words[0];
  for (let i = 0; i <= phrase.length - 1; i++) {
    if (bigWord.length < words[i].length) {
      bigWord = words[i];
      
    }
    
    // console.log(bigWord);
  }
  console.log(bigWord);
}
biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu");