let result = 101;

if (result >= 90 && result <= 100){
  console.log ("A");
} else if (result >=80 && result < 90) {
  console.log ("B");
} else if (result >= 70 && result  < 80) {
  console.log ("C");
} else if (result >= 60 && result  < 70) {
  console.log ("D");
} else if (result >= 50 && result  < 60) {
  console.log ("E");
} else if (result < 50 && result  >= 0) {
  console.log ("F");
} else {
  console.log ("Erro! Nota inválida");
}