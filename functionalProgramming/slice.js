function nonMutatingSplice(cities) {
    // Only change code below this line
    let newCities = [...cities];
     
     return newCities.slice(0, 3);
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  console.log(nonMutatingSplice(inputCities));