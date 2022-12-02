// let count = 1;
// while (count <= 10){
//     console.log(count);
//     count = count + 1;                
// }

// let numOfA  = 0; 
// let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by
// let count = 0; 

// while(text.length >= count) {
//     if(text[count] == "a" || text[count] == "A") {
//         numOfA = numOfA + 1;
//     }
//     count = count + 1;
// }
// console.log(numOfA)

// let num = 100; 
// let count1 = 0;

// while(num > 0) {
//     if
//      (num % 3 === 0) {
//             count1++;
//         }
//         num--;   
// }
// console.log(count1)

// let count = 0; 
// let i = 1;

// while(count < 1){
//     i = count + i
//     i = i++
// }
// console.log(count)

// let x = 10;
// let count = 1;
// let output = "";

// while (x > 0) {
//     let y = 10;
//     while      (y > 0 ){
//         output =output + count + "\t";
//         if (count % 10 == 0) output += "\n" // output = output + "\n"
//         y--;
//         count++;
//     }
//     x--;
// }
// console.log(output)

let x = 8;
let count = 1;
let output = "";

while (x > 0) {
    let y = 8;
    while      (y > 0 ){
        output =output + count + "\t";
        if (count % 8 == 0) output += "\n" // output = output + "\n"
        y--;
        count++;
    }
    x--;
}
console.log(output)