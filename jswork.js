const maximumCocktails = (recipe, available) => {
    //we create an empty array. 
  const results = [];
  //we go through each key in our recipes object. 
    for (let key in recipe) {
  //if there is no match with our recipe key with any key in our available object we return 0. 
      if (!available[key]) {
       return 0;
      }
  //otherwise, we add to our results array, the value of that key. 
  //divided by the sum of the value of our recipe object. 
     results.push(available[key]/recipe[key]);
    }
  //we then use the spread operator to go through every element returned to the array. 
  //we then selected the smallest of these numbers and round it down to the nearest whole number. 
    return Math.floor(Math.min(...results));
   }
  
  console.log(maximumCocktails({robbie: 10},{robbie:100}));

