let box = document.getElementById("style");

box.style.height = "100px"
box.style.width = "100px"
box.style.border = "2px solid black"
// box.style.background = "blue"


changeColor();
function changeColor () {
    let i = 10;
    let Q = setInterval(function(){
        i++;
        box.style.backgroundColor = `rgb(${i}, 30, 60)`
        if(i == 250){
            // clearInterval(Q);
            backColor();
            i = 250;

        } 
    },1) 
}

function backColor(){
    let Q = setInterval(function(){
        i--;
        box.style.backgroundColor = `rgb(${i}, 10, 60)`
        if(i == 10){
            // clearInterval(Q);
            changeColor();
            i = 10;
        } 
    },10) 
}