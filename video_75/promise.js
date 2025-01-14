console.log("This is promises");

let prom1 = new Promise((resolve, reject) =>{
    let a= Math.random()
    if(a<0.5){
        reject("No random number is supporting you")
    }
    else{
        
        setTimeout(() => {
            console.log("Yes i am done");
            resolve("Subhadip")
        }, 1000);
    }
})

prom1.then((a) => {
  console.log(a);
}).catch((err) => {
    console.log(err);
})

let prom2 = new Promise((resolve, reject) =>{
    let a= Math.random()
    if(a<0.5){
        reject("No random number is supporting you 2")
    }
    else{
        
        setTimeout(() => {
            console.log("Yes i am done 2");
            resolve("Subhadip 2")
        }, 1000);
    }
})

prom2.then((a) => {
  console.log(a);
}).catch((err) => {
    console.log(err);
})

// let p3 = Promise.all([prom1,prom2]);
// let p3 = Promise.allSettled([prom1,prom2]);
// let p3 = Promise.race([prom1,prom2]);
// let p3 = Promise.any([prom1,prom2]);
// let p3 = Promise.resolve([prom1,prom2]);
let p3 = Promise.reject([prom1,prom2]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})