function dropElements(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    if (func(el)) {
      return arr.slice(index);
    }
  }
  return [];
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
