let boost=[12, 7, 9, 20, 33, 18]
let oddValue=boost.filter(num=>num%2==0)
let evenValue=boost.filter(num=>num%2!=0)

let fruits = ["Apple", "Mango", "Apricot", "Banana"];
let result=fruits.filter(fruit=>fruit.startsWith("A"))
console.log("Odd Value"+oddValue);
console.log("Even Value"+evenValue);
console.log("Starts with 'A': "+result);

/* REDUCE--------------
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue); */

let horlicks=[34,5,6,72,8] //sum of all eles
let sum=horlicks.reduce((total,num)=>total+num,0)
let sum1=horlicks.reduce((total,num)=>num*2+total,0)
console.log("Sum: "+sum);
console.log("Sum1: "+sum1);