//we pass into the function a value of number in this example 234
function atomicBlonde(a){
//we create a variable  and convert the argument (234) to a string and use split to create an array of [2, 3, 4]
    let newStringArray = a.toString().split("")
//We create a variable in which we use reduce to add together the elements [2, 3, 4] (9)
    let addition = newStringArray.reduce(function(a,b) {
//our additional variable is now valued at 9 after we use reduce.    
        return (+a)+(+b);
    });   
    let multiplication = newStringArray.reduce(function(a,b) {
        return (+a)*(+b);
//we do the same thing, except this time we multiply the elements of the array. [2,3,4] (24)
    });
//if our variable addition is equal to our variable multiplication, that we have an atomic number. 
        if(addition === multiplication) {
            return true 
    }   else {
//if this is not the case, it is not an automatic number
            return false 
        }
        
    };
    
    console.log(atomicBlonde(234)); //the number 234 is not an automic number. 

