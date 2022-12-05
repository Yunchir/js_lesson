// output = "";
// count = 1;

// for (let row = 1; row <= 4; row++) {
//   for (space = 4 - row; space > 0; space--) {
//     output = output + " ";
//   }
//   for (let num = 1; num >= row; num++) {
//     output = count + " ";
//     count++;
//   }
//   output = output + "\n";
// }

// console.log(output);

//////////////////ner songoh/////////////////////

// let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (i = 1; number.length > i; i++ ){
//     number[i]++;
// }

// let studentNames = ['bold', 'dorj', 'tsetsgee', 'dulmaa'];
// let i = 0;
// while (i <= studentNames.length){
//     if (studentNames[i] && studentNames[i][0] === "d") {
//         console.log(studentNames[i]);
//     }
//     i++
// }

// if (2) {
//     console.log("bla");
// } else{
//     console.log("else");
// }


///////////hamgiin urt ner oloh//////////////

let classNames = [
    "sharavnymbuu", 
    "batnym", 
    "enkhtuul", 
    "jamynpurev", 
    "munkhbat", 
    "uugan-erdene", 
    "yunchir", 
    "namnantseren", 
    "usukhbayr", 
    "munkhsuld",
    "batmunkh",
    "maral",
    "nomin",
    "narandelgerekh",
    "batsukh",
    "ylalt",
    "munkhtuul",
    "otgonbayr",
    "baljinnym"
]
 let urtner = ""; i = 0;
 while (i < classNames.length) {
    if (classNames[i].length > urtner.length){
        urtner = classNames[i];
    } else {urtner = urtner;
    }i++;
}
 console.log(urtner);

////////////////////////////////

// for (let i = 0; i<x.length; i++) {
//     for (let j = 0; j < x [0].length; j++) {
//         console.log
//     }
// }




/////////DATE/////////

// let now = new Date();
// console.log(now);

// //////toolj ehelsen tsag ni 1970:01:01hoish toolno/////////

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);