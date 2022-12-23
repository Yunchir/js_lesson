let foods =  [
    {
      "name" : "baked beans",
      "price" : 0.40,
      "image" : "beans.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "hot dogs",
      "price" : 1.99,
      "image" : "hotdogs.jpg",
      "type" : "meat"
    },
    {
      "name" : "spam",
      "price" : 2.85,
      "image" : "spam.jpg",
      "type" : "meat"
    },
    {
      "name" : "refried beans",
      "price" : 0.99,
      "image" : "refried.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "kidney beans",
      "price" : 0.58,
      "image" : "kidney.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "garden peas",
      "price" : 0.52,
      "image" : "gardenpeas.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "mushy peas",
      "price" : 0.58,
      "image" : "mushypeas.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "corned beef",
      "price" : 2.39,
      "image" : "cornedbeef.jpg",
      "type" : "meat"
    },
    {
      "name" : "tomato soup",
      "price" : 1.40,
      "image" : "tomatosoup.jpg",
      "type" : "soup"
    },
    {
      "name" : "chopped tomatoes",
      "price" : 0.45,
      "image" : "tomato.jpg",
      "type" : "vegetables"
    },
    {
      "name" : "chicken noodle soup",
      "price" : 1.89,
      "image" : "chickennoodle.jpg",
      "type" : "soup"
    },
    {
      "name" : "carrot and coriander soup",
      "price" : 1.49,
      "image" : "carrotcoriander.jpg",
      "type" : "soup"
    }
  ];

  let names = ["boldoo", "dorjoo", "altai", "gerlee", "bataa", "batmukh"]

  let cheap = foods.filter((food)=>{
    console.log("hello doing something")
    return food.price
  }); // Arrow function return boolean
  let cheap1 = foods.filter((food) => food.price);
  // Arrow function return boolean

  let sortedName = names.sort((name)=> {
    if (name[0] == "b") {
        return 10;

    } else {
        return -10;
    }
  }) //Arrow funchtion return number (position || negative)

  let nubmers = [1,23, 23, 45, 67, 34, 1, 3, 5];

  Number.sort((a,b) => b - a); //Arrow funchtion return number (position || negative)

  console.log(number);


let orchuulga = foods.map((food)=> ({
    ner: food.name,
    une: food.price
}))
console.log(orchuulga);