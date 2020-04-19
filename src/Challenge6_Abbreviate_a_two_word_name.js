
/*
//Challenge4_MultiplyValue 

const multiplyValue = (value, times) => {
    //IF OUR (VALUE) IS NOT A NUMBER AND NOT A STRING OR OUR (TIMES) IS NOT A NUMBER, WE RETURN NULL.
        if (typeof value !== "number" && typeof value !== "string" || typeof times !== "number") {
            console.log("Your VALUE is not a number or string or your TIMES is not a number")
           return null 
    //IF VALUE IS A NUMBER 
        } else if (typeof value === "number") {
            console.log("you are both numbers!")
    //we return the sum of both of our numbers. 
            return value * times 
        } else {
    //IF VALUE IS ANYTHING ELSE (THIS HAS TO BE A STRING) 
            console.log("you are a string followed by a number!")
    //we return the string and repeat it as many times as the number of our times value. 
            return value.repeat(times)
        }
    
    }
    console.log(multiplyValue(4, 4))//you are both numbers! returned 16 
    console.log(multiplyValue("[hello]", 4))//you are a string followed by a number! "[hello][hello][hello][hello]"
    console.log(multiplyValue(["array!"], 4)) //Your VALUE is not a number or string or your TIMES is not a number! //null 
    console.log(multiplyValue("[hello]", "string"))//Your VALUE is not a number or string or your TIMES is not a number! //null
*/


/*
//Challenge5_MaximumCocktails

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

*/
/*
//Challenge6_AbbreviateATwoWordName 

function abbrevName(name){
    //For example, we pass in Robbie Colborne as the value of name. 
    //we make an array the takes the value of name and makes it uppercase. 
    //we use the .split method to create an array that
    //contains individual elements based on when we have a space. 
    const array = name.toUpperCase().split(" ");
    //array = [ROBBIE, COLBORNE]
    //we create an empty array.
    const firstLetterOfEachWord = [];
    //we create a loop that goes through every element in our array. 
    for (i of array) {
    //we take the first letter of every element and put it into our empty array. 
      firstLetterOfEachWord.push(i.charAt(0))
    //firstLetterOfEachWord = [R,C]
    }
    //we use the .join method to make our array into a string,
    //we also pass in the argument (".") to remove the space and make it a dot. 
    answer = firstLetterOfEachWord.join("."); 
    //answer = "R.C"
    return answer
    }
*/