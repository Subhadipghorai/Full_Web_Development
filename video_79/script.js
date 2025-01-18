let a = prompt("Enter First number");

let b= prompt("Enter Second number");

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("Sorry  this is not allowed")
}
let sum = parseInt(a) + parseInt(b);


try {
    
    console.log("The sum of the two numbers",sum*x)
} catch (error) {
    console.log("Error is occurred")
    
}
finally{
    console.log("files are closed and db connection is being closed")
}