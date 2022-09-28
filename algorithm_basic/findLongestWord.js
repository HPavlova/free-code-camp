function findLongestWordLength(str) {
  let max = 0;
  const arr = str.split(" ");
  for (let index = 0; index < arr.length; index++) {
    arr[index].length > max ? (max = arr[index].length) : max;
  }
  return max;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
