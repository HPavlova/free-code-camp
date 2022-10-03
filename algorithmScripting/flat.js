function steamrollArray(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? steamrollArray(cur) : cur),
    []
  );
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
