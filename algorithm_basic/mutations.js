function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
}

console.log(mutation(["hello", "hey"]));
