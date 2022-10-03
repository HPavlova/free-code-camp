function sumPrimes(num) {
  let arrPrim = [];

  for (let i = 2; i <= num; i++) {
    if (arrPrim.every((prime) => i % prime !== 0)) {
      arrPrim.push(i);
    }
  }

  return arrPrim.reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
