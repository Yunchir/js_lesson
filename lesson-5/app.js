// let output = "";

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++){
//         output = output + j+ "";
//     }
//     output += "\n"
//     debugger
// }

// console.log(output + " ");

// let n = 15; 
// let output = "" 

// for (let row = "1"; row < n; row++) {
//     for (let col = "1"; col < n; col++){
//         output = output + "*";
//     }
//     output += "\n"
//     debugger
// }

// console.log(output);

// let n = 5;
// for (let row = 1; row <= n; row++) {
//   for (let col = 1; col <= n; col++) {
//     if (row == 1 || row == n || col == 1 || col == n) {
//       output = output + "*";
//     } else {
//       output = output + " ";
//     }
//     debugger;
//   }
//   output = output + "\n";
// }

// console.log(output);

// let number = "1234567834567";

// console.log(number.charAt(number.length - 3));
// console.log(number.substring(1, 3));
//  number = 
//     number.substring(-0, number.length - 3) + 
//     "_" + 
//     number.substring(number.length - 3, number.length);
//  console.log(number);



 let password = "12";
 let input;

while (password !== input){
     input = prompt("Enter your paasword:")
 }

alert("zuv baina")

let number;

while (true){
     number = prompt("Enter a phone number:");
     let firstChar = number.charAt(0);
     number = Number(number);
     if (Number.isInteger(number) && (firstChar == "9" || firstChar == "8"))
     break;
}