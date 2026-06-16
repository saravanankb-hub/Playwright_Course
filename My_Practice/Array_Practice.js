let arr=[10,"Sarav",true]
console.log("Index value in array :"+arr[1],"Type of the  index is->"+typeof arr[1]);

arr.push("hill")
console.log(arr);
arr.pop()
console.log(arr); //removing last index value of the array
console.log("Length: "+arr.length);

let nums=[1,5,10]
let  triblets=nums.map(n=>n*3)
console.log(nums,"After triplets: ",triblets);

/**No type declarations: */
/*Functions can be passed as arguments:- callback when a function is passed to another function*/
function execute(a,b,c,demo) {
    return demo(a,b,c);
}

function add(a,b,c) {
    return a+b+c
}

function mul(a,b,c) {
    return a*b*c
}
console.log("Add: "+execute(3,6,12,add));
console.log("Sub: "+execute(1,10,7,mul));
