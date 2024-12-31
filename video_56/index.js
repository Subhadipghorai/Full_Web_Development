console.log("Hey this is tutorial for javascript conditional statements ")

let age = 15;
let grace =4;

console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);//**  exponential symbols

if((age+grace)>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}

//ternary operators
let a=6;
let b=8;
let c= a>b?(a-b):(b-a);
console.log(c);