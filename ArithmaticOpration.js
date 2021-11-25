let a=20
let choice =3;
let b=14
let c=15
let operation1 = a+(b*c);
let operation2 =(a%b)+c;
let operation3 = c+(a/b);
let operation4 =(a*b)+c;
console.log("Result of Opretion 1: " +operation1);
console.log("Result of Opretion 2: " +operation2);
console.log("Result of Opretion 3: " +operation3);
console.log("Result of Opretion 4: " +operation4);
if (operation1>operation2&& operation1>operation3 &&  operation1>operation4){
    
    console.log("Operation 1 is Maximum");
}
else if(operation2 > operation1 && operation2>operation3 && operation2>operation4){
    console.log("Operation 2 is Maximum");
    
    }
 else if (operation3 > operation1 && operation3>operation2 && operation3>operation4){
    let d=c+a/b;
    console.log("Operation 3 is Maximum");
}
else{
    
    console.log("Operation 4 is Maximum");
}

//code to find minimum opretion
if (operation1<operation2&& operation1<operation3 &&  operation1<operation4){
    
    console.log("Operation 1 is Minimum");
}
else if(operation2 < operation1 && operation2<operation3 && operation2<operation4){
    console.log("Operation 2 is Minimum");
    
    }
 else if (operation3 < operation1 && operation3<operation2 && operation3<operation4){
    let d=c+a/b;
    console.log("Operation 3 is Minimum");
}
else{
    
    console.log("Operation 4 is Minimum");
}