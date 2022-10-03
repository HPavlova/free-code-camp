function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const numDivisors = max - min + 1;
  let upperBound = 1;

  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let i = max; i <= upperBound; i += max) {
    let countDivisors = 0;
    for (let j = min; j <= max; j++) {
      if (i % j === 0) {
        countDivisors += 1;
      }
    }

    if (countDivisors === numDivisors) {
      return i;
    }
  }
}

console.log(smallestCommons([1, 5]));
