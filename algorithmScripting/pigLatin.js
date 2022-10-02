function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"];

  let add = "";

  for (let i = 0; i < str.length; i++) {
    if (vowel.some((v) => v === str[0])) {
      return str + "way";
    } else if (vowel.some((v) => v === str[i])) {
      return str.substring(add.length, str.length) + add + "ay";
    } else {
      add += str[i];
    }
  }

  // if (vowel.some((v) => !str.includes(v))) {
  return str + "ay";
  // }
}

console.log(translatePigLatin("nsonant"));
console.log(translatePigLatin("rhythm"));
