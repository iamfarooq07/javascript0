

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

function firstName() {
    console.log("This is my first coding blog");
    return firstName
}

firstName()


function lastName() {
    console.log("hello world")
}
lastName();


function game() {
    console.log("This is console.log code")
}

game()

function sum(a, b) {
    console.log(a + b);
}

sum(319, 28)


function min(a, b, c) {
    console.log(a + b + c);
}

min(319, "farooq", 28)


function all (a, b, c) {
    console.log(a * b + c);
}

min(319, 223 , 28)
