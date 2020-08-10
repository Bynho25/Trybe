const fat = (n) => {
  if (n <= 1) {
    return n
  } else {
    return n * (fat (n - 1));
  }
}
console.log (fat(5));

const fat2 = n2 => {return n2 * (fat(n2 - 1))}

console.log(fat2(5));