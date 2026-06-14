/*String literal */
let firstPlaceName="Madurai"
let firstPlaceToTravel="Austria"

console.log(firstPlaceName==firstPlaceToTravel);//false - comparing the values
console.log(firstPlaceName==firstPlaceToTravel);//false - comparing the values
console.log(firstPlaceName==="Madurai");//true - comparing the values - equal , type also string
console.log(firstPlaceName==="madurai");//false - comparing the values - not equal , but type is string

/**String objects */
console.log("Using new keyword:");
let secondPlaceName=new String("Madurai")
let identical_PlaceName=new String("Madurai")
let secondPlaceToTravel=new String("Austria")

console.log("literal vs new - same value: " +(firstPlaceName==secondPlaceName)); // true
console.log("literal vs new - same value: "+(firstPlaceToTravel==secondPlaceToTravel));// false
console.log("String new vs String new - same value: "+(secondPlaceName==identical_PlaceName));// false

/**Escape sequence */
let test='Hello, it\'s a life to live\t!\t!\t! \nSo, Live!!!'
console.log(test);
let toBeAdd="Love",mustToAdd="Laugh";
console.log("Concat string adding: "+toBeAdd+" is added ="+test.concat(toBeAdd,"!!!",mustToAdd,"!!!"))+"!!!";

/**Way to add var value in console using $*/
function stringFun(params) {
    console.log(`There must be ${toBeAdd} can exist.`);    
}
stringFun("Laugh")

/**chatAt() */
console.log(secondPlaceName.charAt(2))//d
console.log(secondPlaceName.indexOf("a"))//1
console.log(secondPlaceName.indexOf("a",3))//5 - Starting index is the 2nd arg here
console.log(secondPlaceName.lastIndexOf("a"))//5 - Works in reverse way to start reading the string
console.log(secondPlaceName.split("",2))// [ 'M', 'a' ]
let paragraph="nangalum madura karaingathanda!"
console.log(paragraph.split(" "))// [ 'nangalum', 'madura', 'karaingathanda!' ]
console.log(paragraph.substring(5,10));//lum m - start, end index - Single index also can be define
console.log(paragraph.slice(5,10));//lum m - start, end index - Single index also can be define
// Diff between slice and substring is negative value allowing by slice not substring

/**Slice */
let fileName="mandelaDrawing.jpeg"
let fileName1="something.pdf"
console.log(fileName.slice(-4));//jpeg
console.log(fileName1.slice(-3));//pdf


let premiumAmount="$78.9002"
let premiumNumber=parseFloat(premiumAmount.slice(1))
if (premiumNumber>60) {
    console.log("Premium amount quoted (In US dollers): "+premiumNumber);//
}


