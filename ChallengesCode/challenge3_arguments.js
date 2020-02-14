//we pass into our function all the different elements of our argument using the spread operator. 
function multipleArguments(...theArgs  ) {
//if the length of the argument is 0, that is what we return 
	if(theArgs.length == 0){
		return 0
    }else
//otherwise, we use the reduce method to go through every element and multiply them out. 
	return theArgs.reduce((previous, current) => {
//we then return the value of multiply out to a single number
		return previous * current; 
	})
}

multipleArguments(1,2,3,4,5,6,7)