function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => (a === b ? 1 : a > b ? 0 : -1));
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
