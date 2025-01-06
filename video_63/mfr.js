let arr =[1,3,5,7,11,13];

// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr=arr.map((element,index,arr) =>{

    return element**2;
})
console.log(newArr);

const greaterThenSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;

}
console.log(arr.filter(greaterThenSeven));

//array reduce method

let arr2= [1,2,3,4,5,6,7];
const red=(a,b)=>{
    return a+b;
}
console.log(arr2.reduce(red));