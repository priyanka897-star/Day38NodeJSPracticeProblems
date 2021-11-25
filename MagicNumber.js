const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter a number you want to check:", function(masicnum) {
    let Number_For_Prime = parseInt(masicnum);
    
    remainder = 1 
     sum = 0;  
let num1;
    let num = Number_For_Prime;  
    while (num > 9)               
    {   
        while (num > 0)  
        {    
           remainder = num % 10;   
            sum = sum + remainder;  
            num = num / 10;     
        }  
        num1 = sum;  
        sum = 0;  
}  
if (num1 == 1)  
{  
console.log("The given number is a magic number.");  
}  
else  
{  
console.log("The given number is not a magic number.");  
}  
});