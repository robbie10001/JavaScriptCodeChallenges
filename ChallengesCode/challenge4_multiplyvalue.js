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