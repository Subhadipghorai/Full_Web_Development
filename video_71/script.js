// remove and insert the element in dom

console.log(document.querySelector(".box").innerHTML);

console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".container").ATTRIBUTE_NODE);

console.log(document.querySelector(".box").dataset);

// let div = document.createElement("div");
// div.innerHTML="I am div i have inserted <b>by subhadip</b>";
// div.setAttribute("class","box");
// document.querySelector(".container").append(div);



// insert adduction html / text /Element



// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML(
//   "beforebegin",
//   `<div class="box">I am div i have inserted by subhadip</div>`
// );
// cont.insertAdjacentHTML(
//   "beforeend",
//   "<div class='box'>I am div i have inserted by subhadip</div>"
// );
// cont.insertAdjacentHTML(
//   "afterbegin",
//   "<div class='box'>I am div i have inserted by subhadip</div>"
// );
// cont.insertAdjacentHTML(
//   "afterend",
//   "<div class='box'>I am div i have inserted by subhadip</div>"
// );

// node removal

// let id = document.getElementsByClassName(".box");
// id.remove();

// let ic= document.querySelector(".box");
// ic.remove();

console.log(document.querySelector(".container").classList);


//add or insert  classlist method

document.querySelector(".container").classList.add("bg_yellow");

// remove classlist method

document.querySelector(".container").classList.remove("bg_yellow");

// toggle method

document.querySelector(".container").classList.toggle("red");