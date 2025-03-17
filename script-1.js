

// //  -----------string-method------------//

// let b = "farooq";
// console.log(b.charAt())
// console.log(b.at(1))
// console.log(b.toLowerCase())
// console.log(b.toUpperCase())
// console.log(b.length)
// console.log(b.slice(0, 3))
// console.log(b.slice(2))
// console.log(b.replace("roo", "123"))
// console.log(b.concat("ali", " = ", "maaz", "umer"))
// console.log(b.indexOf())
// console.log(b.toString("ali"))
// console.log()
// console.log()



//------/

//DOM=document object model -----/

// document.title = "farooq is good";
// document.body.style.backgroundColor = "green"
// console.log(document.body)

//-----/

// let a1 = [1, 2, 3, 4,]
// let a2 = [5, 6, 7, 8,]
// let a3 = [9, 10, 11, 12,]

// a1.concat(a2, a3)

//------/


// var empolyes = [
//     {
//         firstName: "Ahamed",
//         designation: "Manager",
//         salary: 55000,
//         time: "10 to 5",
//         present: true,
//     },
//     {
//         firstName: "Maaz",
//         designation: "computer operator",
//         salary: 25000,
//         time: "8 to 5",
//         present: false,
//     },
//     {
//         firstName: "Danish",
//         designation: "Documents writer",
//         salary: 40000,
//         time: "9 to 5",
//         present: true,
//     },
//     {
//         firstName: "Nisar",
//         designation: "offies Helper",
//         salary: 20000,
//         time: "8 to 5",
//         present: false,
//     },
// ]
// console.log(empolyes)

// var sum = 0;

// for (let i = 0; i < empolyes.length; i++) {
//     // console.log(empolyes,length)
//     sum = sum + empolyes[i].salary
// }
// console.log('Salarys : ' +sum)
// var avg = sum / empolyes.length;
// console.log("Avg : " + avg)
// console.log("Name : " + empolyes[3].firstName)
// console.log("Designation : " + empolyes[3].designation)
// console.log("Salary : " + empolyes[3].salary)
// console.log("Time : " + empolyes[3].time)
// console.log('Present : ' + empolyes[3].present)

//-------/

//function---/

// function firstName() {
//     console.log("This is my first coding blog");
//     return firstName
// }

// firstName();


// function lastName() {
//     console.log("hello world")
// }
// lastName();


// function game() {
//     console.log("This is console.log code")
// }

// game();

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(319, 28);


// function min(a, b, c) {
//     console.log(a + b + c);
// }

// min(319, "farooq", 28);


// function all (a, b, c) {
//     console.log(a * b + c);
// }

// min(319, 223 , 28);

// //--------/

//---object--and--array--/

// let product = [
//     {
//         firstname: "mobile",
//         price: 24000,
//         lastname: "i phone",
//         quantity: 30,
//         available: true,
//     },
//     {
//         firstname: "computer",
//         price: 124000,
//         lastname: "hp",
//         quantity: 10,
//         available: false,
//     },
//     {
//         firstname: "laptop",
//         price: 94000,
//         lastname: "sumsung",
//         quantity: 15,
//         available: true,
//     }
// ]
// console.log(product);


// var sum = 0;

// for (let i = 0; i < product.length; i++) {
// console.log(product.length)
// sum = sum + product[i].price
// }
// console.log("sum = " +sum)

// var avg = sum / product.length
// console.log("Avg = " +avg)

//-------/

// var collections = [
//     {
//         id: 511,
//         firstName: "Caps",
//         items: [
//             { price: 250, color: "black", quantity: 210 },
//             { price: 380, color: "white", quantity: 460 },
//             { price: 600, color: "Blue and white", quantity: 160 },
//             { price: 110, color: "black and white", quantity: 300 },
//         ]
//     },
//     {
//         id: 512,
//         firstName: "shoes",
//         items: [
//             { price: 1800, color: "green", quantity: 110 },
//             { price: 5800, color: "red", quantity: 250 },
//             { price: 3500, color: "black", quantity: 270 },
//             { price: 2500, color: "white", quantity: 100 },
//         ]
//     },
//     {
//         id: 513,
//         firstName: "watch",
//         items: [
//             { price: 8000, color: "golden", quantity: 200 },
//             { price: 13000, color: "silver", quantity: 560 },
//             { price: 6500, color: "white", quantity: 330 },
//             { price: 10000, color: "black", quantity: 800 },
//         ]
//     }
// ]

// for (let farooq = 0; farooq < collections.length; farooq++) {
//     var sum = 0;
//     var index = farooq;

//     for (let i = 0; i < collections[index].items.length; i++) {
//         sum = sum + collections[index].items[i].quantity
//     }

//     var avg = sum / collections[index].items.length

//     console.log("collections " + collections[index].firstName + " = " + sum + "(" + avg + ")");
// }

// --------------/

// var products = [
//     {
//         id: 101,
//         title: "Airpods",
//         variations: [
//             { color: "blue", price: 2000, quantity: 4 },
//             { color: "black", price: 3000, quantity: 2 },
//             { color: "white", price: 4000, quantity: 6 },
//             { color: "pink", price: 5000, quantity: 8 },
//         ],
//     },
//     {
//         id: 102,
//         title: "Mobile",
//         variations: [
//             { color: "blue", price: 5000, quantity: 2 },
//             { color: "black", price: 6000, quantity: 1 },
//             { color: "white", price: 8000, quantity: 5 },
//         ],
//     },
//     {
//         id: 103,
//         title: "Laptop",
//         variations: [
//             { color: "blue", price: 500, quantity: 10 },
//             { color: "black", price: 1000, quantity: 2 },
//             { color: "white", price: 1500, quantity: 3 },
//         ],
//     },
// ];

// for (var j = 0; j < products.length; j++) {
//     var index = j;
//     var sum = 0;
//     for (var i = 0; i < products[index].variations.length; i++) {
//         sum = sum + products[index].variations[i].quantity;
//     }

//     var avg = sum / products[index].variations.length;

//     console.log("Product " + products[index].id + " = " + sum + "(" + avg + ")");
// }

// Product 101 =  15 (5)
// Product 102 =  15 (5)
// Product 103 =  15 (5)

// --------------------------------------------
// debugger;
// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5; j++) {
//         console.log(i, j);
//     }
// }

// -----------------------------------
// for (var i = 0; i < 3; i++) {
//   // i -> 0

//   // i -> 1

//   // i -> 2
//   for (var j = 0; j < 3; j++) {
//     // 1----------------
//     // i -> 0
//     // j -> 0

//     // i -> 0
//     // j -> 1

//     // i -> 0
//     // j -> 2

//     // 2------------
//     // i -> 1
//     // j -> 0

//     // i -> 1
//     // j -> 1

//     // i -> 1
//     // j -> 2

//     // 3------------
//     // i -> 2
//     // j -> 0

//     // i -> 2
//     // j -> 1

//     // i -> 2
//     // j -> 2

//     console.log(i, j);
//   }
// }

// var index = 2
// var sum = 0;
// for(var i=0; i < products[index].variations.length; i++) {
//     // 0  -> 0 + 4 // 4
//     // 4 -> 4 +  2
//     sum  = sum + products[index].variations[i].quantity
//     // console.log(products[0].variations[i])
// }

// var avg = sum / products[index].variations.length

// console.log(sum)
// console.log(avg)

// console.log(products[0].variations[1])

//------/

var teambowlers = [
    {
        id: 54,
        firstName: "Mohd Amir",
        desination: "bowler",
        works: [
            { salary: 95000, wciket: 30, format: "ODI" },
            { salary: 55000, wciket: 22, format: "T20" },
            { salary: 195000, wciket: 48, format: "TEST" },
        ]
    },
    {
        id: 65,
        firstName: "S afridi",
        desination: "bowler",
        works: [
            { salary: 55000, wciket: 10, format: "ODI" },
            { salary: 20000, wciket: 12, format: "T20" },
            { salary: 95000, wciket: 18, format: "TEST" },
        ]
    },
    {
        id: 78,
        firstName: "H Rouf",
        desination: "bowler",
        works: [
            { salary: 15000, wciket: 25, format: "ODI" },
            { salary: 35000, wciket: 43, format: "T20" },
            { salary: 65000, wciket: 15, format: "TEST" },
        ]
    },
    {
        id: 31,
        firstName: "J khan",
        desination: "bowler",
        works: [
            { salary: 33000, wciket: 23, format: "ODI" },
            { salary: 21000, wciket: 19, format: "T20" },
            { salary: 15000, wciket: 35, format: "TEST" },
        ]
    }
]
// console.log(teambowlers);
for (let farooq = 0; farooq < teambowlers.length; farooq++) {
  
    var sum = 0;
    var index = 3;
    for (let i = 0; i < teambowlers[index].works.length; i++) {
        //   console.log(teambowlers[0].works[i].salary)
        sum = sum + teambowlers[index].works[i].wciket
    }
    // console.log(sum)
    var avg = sum / teambowlers[index].works.length
    // console.log(avg)
console.log(teambowlers[index].firstName,"=","id","=",teambowlers[index].id,"=","wciket","=",+sum,"=","Avg",+avg)
}
// modh amir = id = 54 =wciket=100 =avg(3)