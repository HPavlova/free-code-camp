function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    return str.replace(before, after[0].toUpperCase() + after.substring(1));
  }
  return str.replace(before, after.toLowerCase());
}

// console.log(
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
// );

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
