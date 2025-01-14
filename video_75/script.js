console.log("JavaScript Callbacks & promises functions");

setTimeout(() => {
    console.log("I am inside the settimeout")
    
}, 0);

setTimeout(() => {
    console.log("I am inside the settimeout 2")
    
}, 0);
console.log("The End")

//callbacks functions

const callback=(arg) => {
    console.log(arg);

}

const loadScript = (src,callback) =>{
    let sc= document.createElement("script");
    sc.src=src;
    sc.onload =callback("Simple JavaScript")
    document.head.append(sc)
    

}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);