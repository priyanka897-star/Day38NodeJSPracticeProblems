let c = 35;//feet value
let a = 12; //inches values
let d
let Feet_To_Inch = 1;
let Feet_To_Meter = 2;
let Inch_To_Feet = 3;
let Meter_To_Feet=4;
let option =2;
switch(option){
case Feet_To_Inch:
    d =c*12;
    console.log(d+ "inch");
    break;
case Feet_To_Meter :
        d =c*0.3048;
        console.log(d+ "Meter");
        break; 
case Inch_To_Feet:
        d =a/12;
        console.log(d+ "Feet");
         break;  
case Meter_To_Feet:
     d=a/.03048
    console.log(d+ "Feet"); 
    break;
}
