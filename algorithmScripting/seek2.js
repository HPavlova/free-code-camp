function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const keysSource = Object.keys(source);
  
  for (let index = 0; index < collection.length; index++) {
    const el = collection[index];
    if (
      keysSource.every(
        (key) => el.hasOwnProperty(key) && el[key] === source[key]
      )
    ) {
      arr.push(el);
    }
  }

  // Only change code above this line
  return arr;
}

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);
