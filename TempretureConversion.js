const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tempConversion(value) {

    let choice = parseInt('Enter 1.Conversion from C to F 2.Conversion from F to C : ');
    let result;
    switch (choice) {
        case "1":
            console.log("Conversion from C to F");
            if (value >= 0 && value <= 100) {
                result = (parseFloat(value) * (9 / 5)) + 32;
            } else {
                console.log("Enter value between 0-100");
            }
            break;
        case "2":
            console.log("Conversion from F to C");
            if (value >= 32 && value <= 212) {
                result = (parseFloat(value) - 32) * (5 / 9);
            } else {
                console.log("Enter value between 32-212");
            }
            break;
        default:
            console.log("Invalid choice");
    }
}
rl.question("enter the  number1 ", function (number1) {

    let num1 = parseInt(number1);


    tempConversion(value);
});