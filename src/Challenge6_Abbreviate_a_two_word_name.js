
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