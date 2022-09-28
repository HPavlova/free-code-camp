function largestOfFour(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    let max = arr[index][0];
    const element = arr[index];
    for (let index = 0; index < element.length; index++) {
      const i = element[index];

      i > max ? (max = i) : max;
    }
    result.push(max);
  }
  return result;
}

console.log(largestOfFour([[-72, -3, -17, -10]]));
