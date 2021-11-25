const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter the  number ", function (number) {
    let num = parseInt(number);
    let result;
    let e;
    let i = 0
    p = 1;
    n = 2;

    while (i < num) {

        i++
        if (n == 0)
            p = 1;
        else
            p = p * 2;

        if (p == 256)
            break;

        console.log(n, i, p);
    }

});