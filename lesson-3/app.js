// let firstName = 'John';
// let fullName = firstName.concat('', 'Smith');
// console.log(fullName)

// // let myString = "single quotes' double quotes \" ";
// let babySharkLyrics = "12345123r4egrmtbv203ojg2po4 789";
// // console.log(myString);

// console.log(bby.length);
// console.log(bby.charAt(0));
// console.log(bby[bby.length - 1]);
// console.log(bby.substring(0, 4));
// console.log(bby.substring(3,4));

// let bby = "baby shark baby shark";
// let full = bby.concat(" ", " doo-doo");
// console.log(bby.toUpperCase());
// console.log(bby.toLowerCase());
// console.log(full);
// console.log(bby.length);
// console.log(bby.charAt(3));
// console;
// console.log(bby.substring(3, 4));
// console.log(bby.substr(3, 4));
// console.log(bby.indexOf("shark"));
// console.log(bby.substring(0));

// let str = "This is a string";
// console.log(str.indexOf("is")); // 2

let myString = "a this on substring";
let firstPart = myString.substring(0, myString.indexOf("is"));
let lastPart = myString.substring(
  myString.indexOf("is") + "is".length,
  myString.length
);
console.log(firstPart.concat(lastPart));
myString = firstPart.concat(lastPart);

firstPart = myString.substring(0, myString.indexOf("on"));
lastPart = myString.substring(
  myString.indexOf("on") + "on".length,
  myString.length
);
myString = firstPart.concat(lastPart);
console.log(myString);

// number

// ceil-taaz
console.log(Math.ceil(0.95));
console.log(Math.ceil(0.005));

// floor-shal
console.log(Math.floor(9.95));
console.log(Math.floor(0.005));

//round
console.log(Math.round(0.95));
console.log(Math.round(0.005));

//max
console.log(Math.max(1, 3, 2));
console.log(Math.max(-1, -3, -2));

//min
console.log(Math.min(1, 3, 2));
console.log(Math.min(-1, -3, -2));

//pow-zereg
console.log(Math.pow(7, 3));
console.log(Math.pow(10, 3));

//random
// alert(Math.ceil(Math.random() * 100) + 100000000);

//ass
let a = 10;
let b = 6;
console.log(Math.floor(Math.random() * Math.ads(a - b)) + Math.min(a, b));
