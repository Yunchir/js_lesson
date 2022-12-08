function greet() {
    console.log("Hello world!")
}

//punkts duudah
greet()
greet()
greet()


function sumOfThree (p1, p2, p3) {
    return p1 + p2 + p3;
}

let result1 = sumOfThree(1, 2, 3);

console.log(result1);

let number1 = parseFloat(prompt("Enter first number: "))
let number2 = parseFloat(prompt("Enter second number: "))

function add(number1, number2) {
    return (number1 + number2)
}
let result = add(number1, number2);
alert("this sum is " + result);

let a = function (name) {
    return "Hello" + name;
}

//array function
const b = (name) => { return "Hello " + name}

console.log(a(" Yunchka"));