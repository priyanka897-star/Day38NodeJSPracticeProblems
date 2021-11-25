const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function checkPalidromes(num1, num2){
    let temp = 0, remainder;
    let a = num1;
    while(a > 0){
        remainder = a % 10;
        a = parseInt(a / 10);
        temp = temp * 10 + remainder;
    }
    if(temp == num2){
        console.log(num1 + " and " + num2 + " are Palindromes");
    }else{
        console.log(num1 + " and " + num2 + " are not Palindromes");
    }
}
rl.question("enter the  number1 ", function (number1) {
    rl.question("enter the  number2 ", function (number2) {
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);


checkPalidromes(num1, num2);
    });
});