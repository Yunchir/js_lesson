// document.getElementsByTagName("body")[0].style.backgroundColor = "blue" 
// "<div class = 'darkMood'>Text</div>";

// document.getElementsByClassName("darkMood")[0].innerHTML = 
// "<div class='darkMood'><h1>Text</h1></div>"

// document.getElementById("root").innerText = ("Hello World");

document.getElementsByClassName("dummy")[0].innerText = ("Hello World");



document.getElementById("demo").innerHTML = "Date : " + Date();

const newDiv = document.createElement("h1");
const newContent = document.createTextNode("Welcome to my website")
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("main");
main[0].appendChild(newDiv);

let listElement = document.getElementsByClassName("list")[0];
let ulElement = document.createElement("ul");
listElement.appendChild(ulElement);

for (let i = 0; i <= 10; i++) {
  let liElement = document.createElement("li");
  liElement.innerText = i;
  ulElement.appendChild(liElement);
}



// let i = 0;

// const myInterval =  setInterval(function () {
//     i++;
//     let newDiv = document.createElement("div");
//     newDiv.innerText = i;
//     rootElement.appendChild(newDiv);
//     if (i == 10) {
//         clearInterval(myInterval);
//     }
// }, 10)

let clock = document.getElementsByClassName("time")[0];
let sec = 0;
let min = 0;
let hour = 0;

    setInterval(function () {
        sec++
        if(sec == 60){
            sec = 0;
            min++;
        }if ( min == 60){
            min = 0;
            hour++;
        }  else if (hour == 24 ){
            hour = 0;
        }
        clock.innerText = `${hour < 10 ? 0 : ""}${hour}:${min < 10 ? 0 : ""}${min}:${sec}`
        
        }, 1);
    