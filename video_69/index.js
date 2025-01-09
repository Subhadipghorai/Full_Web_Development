//factorial of n number 

let a = 6;
function fact(n){
    let arr = Array.from(Array(n+1).keys())
    console.log(arr.slice(1,))
    let c=arr.slice(1,).reduce((a,b)=> a * b)
    return c
}

function facFor(number){
    let fact =1;
    for (let index = 1; index <= number; index++) {
        fact = fact*index
        
    }
    return fact
}
console.log(fact(a));
console.log(facFor(a));