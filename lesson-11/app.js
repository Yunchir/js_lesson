let count = 10;


// document.getElementById("root").innerHTML = "Hi"
// document.getElementsByClassName("rot")[0].style.color = "white"
// document.querySelector('div').style.width = "100px"
document.querySelector('div').style.height = "100px"

document.querySelector("div").style.border = "3px solid black"
document.querySelector("div").style.borderRadius = "5px"
document.querySelector("div").style.textAlign = "center"
document.querySelector("div").style.paddingTop = "20px"
document.querySelector("div").style.boxSizing = "border-box"
document.getElementsByTagName("div")[0].id = "style"

size()
let hi = document.querySelector("div").style.width;
function size (){


let A = setInterval(function (){
    count++
    document.querySelector('div').style.width = `${count}px`
    if(count == 800){
        clearInterval(A);
    } 
},1)
}
