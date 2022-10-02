function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((i) => !arr1.includes(i) || !arr2.includes(i));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
