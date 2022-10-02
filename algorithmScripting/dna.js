function pairElement(str) {
  const base = { A: "T", T: "A", C: "G", G: "C" };
  let arr = str.split("");
  return arr.map(i=>[i, base[i]]);
}

console.log(pairElement("GCG"));
