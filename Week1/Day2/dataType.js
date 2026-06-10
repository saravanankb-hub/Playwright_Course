/*Create the following variables using let (not using var) and check their typeOf 
    a) firstName 
    b) companyName 
    c) mobileNumber 
    d) isAutomation 
    e) hasPlaywright (do not assign) 
 Print and confirm the values and data types */

//  Using var
var firstName="Sarav"
var companyName="Perfi"
var mobileNumber=12341234
var isAutomation=true
var hasPlaywright
var numberFancy=2345678765432234367n

console.log(firstName," - Type: " +typeof firstName)
console.log(companyName ," - Type: " +typeof companyName);
console.log(mobileNumber," - Type: " +typeof mobileNumber);
console.log(isAutomation," - Type: " +typeof isAutomation);
console.log(hasPlaywright," - Type: " +typeof hasPlaywright);
console.log(numberFancy," - Type: " +typeof numberFancy);//big int reprsented in n at the end so able to preserve the number as big not long number


//Using let
let firstName1="Sarav"
let companyName1="Perfi"
let mobileNumber1=12341234
let isAutomation1=true
let hasPlaywright1

console.log(firstName1," - Type: " +typeof firstName)
console.log(companyName1 ," - Type: " +typeof companyName)
console.log(mobileNumber1," - Type: " +typeof mobileNumber)
console.log(isAutomation1," - Type: " +typeof isAutomation)
console.log(hasPlaywright1," - Type: " +typeof hasPlaywright)

//Using const
const himalayaHeight="8848.86m"
console.log(himalayaHeight," - Type: " +typeof himalayaHeight)

//Historical bug
var postCode=null // In java null is not a object. it should be null. In JS it is a bug can't change so object still.
console.log(postCode," - Type: " +typeof postCode)

