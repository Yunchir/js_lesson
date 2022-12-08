// let object = {
//     key : value,
// }

//person bol metot

// {} -> obect -> 1. obect ni: tsegeer nevterch orno -> person.age
//                2. ali esvel person["age"]

//this - tuhain object-iin lishee ni -> return tsis.lastname + ... 

// let person = {
//     firstName : "Ulaanbandi", //ferson ni: proporty
//     lastName : "Yunchir",
//     age : 19,
//     score : (77, 90, 85, 79),
//     isMarried : false,
//     shout : () => { // shout ni: metot
//         console.log("hahahha");
//     },
// }

// console.log(person);

// // //1.
// // func = () => {
// //     console.log(person);
// // };
// // //2. 
// // function getPerson () {
//     // console.log(person);
// }

let person1 = {
    firstName : "Uka",
};
let person2 = {...person1} ; 

person2.firstName = "Dorj";

console.log(person2);




let person3 = [10, 20, 30,];
let person4 = [(person3)];

person3[0] = 100;
console.log(Object.values(person3));
// console.log(person4);

// obekt <-> meto
//.keys()// обьектийн түлхүүр үгүүдийн array-ийг буцаа
//.values()// обьектийн утгуудын array-ийг буцаана.
//.create()// обьект үүсгэх үед хэрэглэнэ.
//.assign()// нэг обьектийг нөгөө рүү хуулахад хэрэглэ
//.toString()// string төрөл рүү хувиргана.

let athlets = [
    {
        name : "Batyam",
        age : 22,
        record : [10, 20, 50,]
    },
    {
        name : "Ylalt",
        age : 23,
        record : [10, 20, 50, 70,]
    },
    {
        name : "Balt",
        age : 25,
        record : [50, 20, 80, 90, 35]
    },
    {
        name : "Uka",
        age : 18,
        record : [10, 40, 50, 20, 80, 90, 35]
    },
    {
        name : "Sharvaa",
        age : 23,
        record : [10, 40, 50, 20, 80, 90, 35, 55]
    },
]

function getAvaragAge (list) {
     let avgAge = 0;
    for(i = 0; i < list.length; i++) { 
        avgAge = avgAge + list[i].age
    }
     avgAge = Math.round(avgAge / list.length) ;
     return (avgAge)
}

function getAvaragSpeep(avgRec) {
    let aRec = 0;
    for(i = 0; i < avgRec.length; i++){
        let bRec = 0;
        for(j = 0; j < avgRec[i].record.length; j++){
            aRec = aRec + avgRec[i].record[i];
        }
        aRec = (aRec / avgRec[i].record[i]);
        return (aRec);
        bRec = bRec + avgRec[i].record[i];
    }
}


console.log(getAvaragAge(athlets));



////////

let athletics = [
    {
      name: "gonchig",
      age: 15,
      country: "Mongolia",
      record: [10, 20, 30],
    },
    {
      name: "dorj",
      age: 25,
      country: "Mongolia",
      record: [100, 20, 30, 40],
    },
    {
      name: "dulmaa",
      age: 35,
      country: "USA",
      record: [100, 20, 30, 200],
    },
    {
      name: "Bat",
      age: 20,
      country: "USA",
      record: [100, 20],
    },
    {
      name: "Bold",
      age: 21,
      country: "Korea",
      record: [10, 20, 300],
    },
  ];
  
  getAllInfo(athletics);
  
  function getAllNames(list) {
    let names = [];
    for (i = 0; i < list.length; i++) {
      names.push(list[i].name);
    }
  
    return names;
  }
  
  // {
  //     name: "gonchig",
  //     age: 15,
  //     country: "Mongolia",
  //     record: [10, 20, 30],
  //   },
  
  function getAvgSec(list) {
    let avgList = [];
    for (i = 0; i < list.length; i++) {
      //list.length = 5 (hunii too)
      let sum = 0;
      for (j = 0; j < list[i].record.length; j++) {
        sum += list[i].record[j];
      }
  
      let personNewObj = {
        name: list[i].name,
        avg: sum / list[i].record.length,
      };
      avgList.push(personNewObj);
    }
    return avgList;
  }
  
  function getAvgAge(list) {
    let sum = 0;
    for (i = 0; i < list.length; i++) {
      sum += list[i].age;
    }
    return Math.round(sum / list.length);
  }
  
  function getAllInfo(list) {
    let names = getAllNames(list);
    let avgAge = getAvgAge(list);
    let avgSec = getAvgSec(list);
    let sum = 0;
    for (i = 0; i < avgSec.length; i++) {
      sum += avgSec[i].avg;
    }
    console.table(avgSec);
    console.log("Avarage Speed:\t", sum / avgSec.length);
    console.log("Avarage Age:\t", avgAge);
    console.log("All Names: \t", names);
    return;
  }