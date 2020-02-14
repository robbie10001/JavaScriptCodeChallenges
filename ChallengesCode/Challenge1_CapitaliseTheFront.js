const capitaliseTheFront = (string) => {
    newArr = [];
        let secondArray =  string.split(" ")
        secondArray.map((word) => {
        newArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
           
        });
            return newArr.join(" ")/
}
      
capitaliseTheFront("WhY DiD ThiS Take SO LonG?")


const capitaliseTheFront = (string) => {
    //we create an empty array. 
          newArr = [];
    //we then save the string our function passes in to a variable and convert this to an array.
    //this array, breaks up each word into its own indicies within the array using the .split method. 
          let secondArray =  string.split(" ")//[ 'WhY', 'DiD', 'ThiS', 'Take', 'SO', 'LonG?' ]
    //we then use that map method on our array. The map method, returns a new array, with teh results of calling a function for every element.
    //our function (word) pushes all of our array items in the secondArray into our NewArray.
    //the first character of each words, is then converted to uppercase. 
    //we then go though ever word in our array from the second indicies onwwards and converts them all to lower case. 
            secondArray.map((word) => {
    //we then use a callback function and in our new array make the first character uppercase and the second character lowercase. 
            newArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
           
        });
    //we when convert the elements of our array into a string, seperating each word with a space.
          return newArr.join(" ")//Why Did This Take So Long?
      }
      
      capitaliseTheFront("WhY DiD ThiS Take SO LonG?")