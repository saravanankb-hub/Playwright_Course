//Var declaration
var name

//initialization:assigining value
name ="Sarav"

//Declartion & Initialization
var name = "Titan"
var name ="Fossil"
name="Nothing"
console.log(name);//last assigned value will be printed.

let travelingPlace="Swiz"
// var travelingPlace="France" not possible(syntac err) here since same var can't be used with keyword type let,boolean,const &var
// let travelingPlace="Poland" let - can't be re-declare but can be re-init
travelingPlace="Poland" 
console.log(travelingPlace);//Prints Poland

const himalayaHeight="8848.86m"
//const himalayaHeight="8848.87m" - can't be re-declare
// himalayaHeight="8848.87m" // Can't be re-init
// console.log(himalayaHeight); //TypeError: Assignment to constant variable.
/*--------------------------------------------------*/

//hoisting -> default behaviour of JS

console.log(number)
var number=10  //var number+number=10

/* internally
var number
console.log(number)
number=10
*/

console.log(number1) // ReferenceError: Cannot access 'number1' before initialization
let number1=20

//TDZ= time period between the variable declaration and value assigned to it