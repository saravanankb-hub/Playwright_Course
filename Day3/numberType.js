/*Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
corresponding string indicating the type. */

function numberCheck(num){
    let result="";
    if (num>0) {
        result = "Positive number";
    } else if (num<0) {
        result = "Negative number";
    } else {
        result = "Neutral";
    }
    return result
}
console.log(numberCheck(50))
console.log(numberCheck(-0.33))
console.log(numberCheck(55))
console.log(numberCheck(0))
// numberCheck(io); //undefined