let boxM = document.getElementById("box");
boxM.style.width = "550px";
boxM.style.height = "400px";
boxM.style.display = "flex";
boxM.style.flexWrap = "wrap";
let a = (Math.floor(Math.random()* 255));
let b = (Math.floor(Math.random()* 255));
let c = (Math.floor(Math.random()* 255));
let d = (Math.floor(Math.random()* 16) + 1);
console.log(d);

for(let i = 1; i <= 16; i++){
    let qDiv = document.createElement("div")
    qDiv.style.width = "120px"
    qDiv.style.height = "120px"
    qDiv.style.border = "1px solid black"
    qDiv.style.backgroundColor = `rgb(${a},${b},${c})`;

    boxM.appendChild(qDiv);
    console.log(a, b, c);
    if( d == i){
        qDiv.style.width = "120px"
        qDiv.style.height = "120px"
        qDiv.style.border = "1px solid black"
        qDiv.style.backgroundColor = `rgb(${a},${b - 30},${c})`;
    }
}
