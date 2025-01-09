// javascript selector by id class and more

console.log("subhadip");

// let boxes=document.getElementsByClassName("box")

// console.log(boxes);
// boxes[2].style.backgroundColor="red";

// let boxes = document.getElementById("red").style.backgroundColor="red";

// document.querySelector(".box").style.backgroundColor="green";


console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e=>{
        e.style.backgroundColor="green";
})

document.getElementsByTagName("div")