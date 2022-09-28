function confirmEnding(str, target) {
  // return str.endsWith(target);

  // if (str[str.length-1] === target ) {
  //     return true;
  // }
  // return false;

//   return str.slice(str.length - target.length) === target;

  const arr1 = str.split("").reverse();
  const arr2 = target.split("").reverse();
  let checkArr = [];

  for (let index = 0; index < arr2.length; index++) {
    arr2[index] === arr1[index] ? checkArr.push(true) : checkArr.push(false);
  }

  return checkArr.includes(false) ? false : true;
}

console.log(confirmEnding("Bastian", "ian"));
