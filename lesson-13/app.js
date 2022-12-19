// function doSomething(func1, func2) {
//   setTimeout(() => {
//     if (now.getHours() < 18) {
//       func1();
//     } else {
//       func2();
//     }
//   }, 2000);
// }

// function printHello() {
//   console.log("Hello");
// }
// function printBye() {
//   console.log("Bye Bye");
// }

// const now = new Date();

// doSomething(printHello, printBye);

// let customButton = document.getElementById("root");

// const something = () => {
//   console.log("CLicked");
// };

// customButton.addEventListener("click", something);
// customButton.innerText = "Click Me";

// let customBtn = document.querySelector("root");
// // customBtn.innerHTML = "click"
// let desktop = document.querySelector("body");
// let scrollY = 0;
// let percentage = document.querySelector("huwi")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    console.log(window.innerHeight);
    let heigth = window.scrollY;
    let percent = Math.floor((window.scrollY * 100) / (document.querySelector('body').clientHeight - window.innerHeight));
    document.querySelector("#percentage").innerHTML = `${percent}%`
}); 