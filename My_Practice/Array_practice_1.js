/* Write the JS program to print duplicates in an array.
let num=[56,78,90,23,90,76,43,56] */

let num=[56,78,90,23,90,76,43,56]
let duplicates=[]

num.forEach((item,index) => {
    if (num.indexOf(item)!==index && !duplicates.includes(item)) {
        duplicates.push(item)
    }
});

console.log(duplicates);

let fruits =["Apple","Mango","Banana","Apple","Apple","Banana","Kiwi"]
let dupFruits=[]

fruits.forEach((fruit,index,arr)=>{
    if (arr.indexOf(fruit)!==index && !duplicates.includes(fruit)) {
        dupFruits.push(fruit)
    }
})
console.log("Duplicated fruits in the list:"+dupFruits);

/**Filter */
let allNum=[12, 7, 9, 20, 33, 18]
let odd=[]
let even=[]
allNum.forEach((current)=>{
    if (current%2==0) {
        odd.push(current)
    }
})
console.log("Even nos: "+odd);

allNum.forEach((current)=>{
    if (current%2!==0) {
        even.push(current)
    }
})
console.log("Odd nos: "+even);

//Using conditional operator

allNum.forEach(num=>num%2==0 ? odd.push(num) : even.push(num))
