function fearNotLetter(str) {
  for (let index = 0; index < str.length; index++) {
    const charCode = str.charCodeAt(index);
    if (charCode !== str.charCodeAt(0) + index) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
