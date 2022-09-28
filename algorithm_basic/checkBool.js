// function booWho(bool) {
//     return typeof bool === "boolean" ;
//   }
  
//  console.log (booWho(null));

 function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));