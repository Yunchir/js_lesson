let myAge = 25;

if (myAge >= 21) {
    console.log("Orohiig horiglno")

} else 
  console.log("orhiig zuvshuurnu")


// let day = 9;

// if (day === 1){
//     console.log("monday")
// } else if (day === 2) {
//     console.log("tuesday")
// }
//  else if (day === 3) {
//     console.log("wednesday")
// }
//  else if (day === 4) {
//     console.log("thursday")
// }
//  else if (day === 5) {
//     console.log("friday")
// }
//  else if (day === 6) {
//     console.log("saturday")
// }
//  else if (day === 7) {
//     console.log("sunday")
// } else {
//     console.log("next week");
// }

let dayname = 9;
let day;

if (dayname === 1) {
    day = "oruulsan udur bol davaa"
} else if (dayname === 2) {
    day = "oruulsan udur bol mygmar"
} else if (dayname === 3 ) {
    day = "oruulsan udur bol lhavaga"
} else if (dayname === 4) {
    day = "oruulsan udur bol purev"
} else if (dayname === 5) {
    day = "oruulsan udur bol baasan"
} else if (dayname === 6) {
    day = "oruulsan udur bol bymba"
} else if (dayname === 7) {
    day = "oruulsan udur bol nym"
} else {
    day = ("error");
}

console.log(day)


// switch

switch (weekday) { 
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default: 
    console.log("Not a Day")
}             

if(weekend==1 || weekday==2 || weekend==3 || weekend==4 || weekend==5){
    console.log("working day")
} else if(weekday==6 || weekend==7){
    console.log("amraltiin udur")
}

let x = 10, y = 20, z=30;

if (x > y) {
    if(x > y){
        console.log(x, " n hamgiin ih");
    } else {
        console.log(y,  " n hamgiin ih");
    }
    } 
     else {
    console.log(y, " n hamgiin ih");
}

if(x > y && x > z){
    console.log(x, " n hamgiin ih")
} else if (y > z){
    console.log(y, " n hamgiin ih")
} else {
    console.log(z, " n hamgiin ih")
}

//ternary

let age = 15; 

if (age < 21){
    console.log("You ar not allowed to drink alchohol");
} else {
    console.log("You are allowed to drink alchohol");
}

age < 21 ? console.log("You ar not allowed to drink alchohol"): console.log("You are allowed to drink alchohol")

condition ? true : false;

const myState = age >= 10 && age <= 18 ? "teeneg" : "adult";