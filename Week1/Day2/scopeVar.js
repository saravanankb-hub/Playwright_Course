// scoping-visibility or accessibility of the variable

/* global scope - can be declared anywhere in the script but outside the block
   block scoped- variable is declared within the block {}
   function scoped- variable declared with in the function  */

   const browser="chrome"
   const browerVersion=60
    
   function getBrowserVersion(){
    if (browser==="chrome"){
        var browerVersion=50 // function scope. it will call inside and outside block and fun
        //let browserVersion = "Chrome 137";// Let will print only inside block. Block scope-if outside block trying to print will get Ref error
        console.log("Browserversion inside block: "+browerVersion)
    }
   }
   console.log("Browser version outside block: "+getBrowserVersion())