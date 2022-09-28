function truncateString(str, num) {
  let newStr = "";
  str.length > num ? (newStr = str.slice(0, num) + "...") : (newStr = str);
  return newStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
