let button = document.getElementById('btn');

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> Enjoy you were clicked "
})
button.addEventListener("contextmenu", ()=>{
    alert(" don't hack right click  please")
})
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})
