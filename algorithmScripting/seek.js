function destroyer(arr, ...args) {
  return arr.filter((i) => !args.includes(i));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
