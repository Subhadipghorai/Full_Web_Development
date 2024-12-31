console.log("javascript functions");

function nice(name) {
    console.log("hello " + name + " you are nice");
    console.log("hello " + name + " you are good");
    console.log("hello " + name + " your tShirt is good");
    console.log("hello " + name + " you have nice hair");
}
// nice("subhadip");

function sum(a,b) {
    
    // console.log(a+b)
    return a + b;
}
result=sum(5,7);
console.log("the sum of two number is: ",result);


//arrow function 

const func1 =(y)=>{
    console.log("I am a arrow function ",y)
}

func1(54)