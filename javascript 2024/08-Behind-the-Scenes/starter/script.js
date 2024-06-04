"use strict";

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age}, born in${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var milenial = true;
//       const str = `oh, and yiu are a nillenial ${firstName}`;
//     }
//     // console.log(str);
//     console.log(milenial);
//     function add(a, b) {
//       return a + b;
//     }
//     console.log(add(2, 3));
//   }
//   printAge();
//   return age;
// }
// const firstName = "Jonas";
// calcAge(1991);
// // console.log(age);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = "jonas";
// let job = "programmer";
// const year = 1991;
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArr(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   //value is in a ttempral dead zone
//   return a + b;
// };

// const addArr = (a, b) => a + b;

// //example
// if (!numProducts) deleteshopCart();

// var numProducts = 10;

// function deleteshopCart() {
//   console.log("all products deleted");
// }
// var x = 1; //values declared by var are stored on the window object can be viiwed in console
// let y = 4;
// const z = 6; //noo stored in the windows object

// const jonas = {
//   name: "jonas",
//   year: 1989,
// };
// jonas.calcAge();

//arrow functions dont get thheir own this keyword...this will refer to the outr function

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// }; //console prints out window ...which is the this of the parent function
// calcAgeArrow(1990);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge; //this copys from the object jonas to the object matilda.....it exports the function in the object in jonas//methid borrowing
// matilda.calcAge();

// const f = jonas.calcAge;
// f();
// var firstName = "Matilda"; //since var creates a variable in the window function this overides the first nae of the object
// const jonas = {
//   firstName: "jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     //solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1991 && self.year <= 1996);
//     // };
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1991 && this.year <= 1996);
//       //   // console.log(this.year >= 1991 && this.year <= 1996);
//     };
//     // console.log(this.year >= 1991 && this.year <= 1996);
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`), //points to the window ...it is a this keyword of the window since arrow functions dont get a this keyword
// };
// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a, b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 32);

// var addArr = (a, b) => { gives an error since arrow functions dont have arguments
//   console.log(arguments);
//   return a + b;
// };
// addArr(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "wilfred",
//   age: 30,
// };
// const friend = me; //objects are stored in the heap ...reference types....friend and me are two difrent identifiers pointing to the exact same value
// friend.age = 27;

// console.log(me);
// console.log("friend", friend);

//primitive types
let lastName = "matilda";
let oldLastName = lastName;
lastName = "davis";

console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: "jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica; //this does not create another object with the name married jessica ....it just creates another variable pointing to the same object within the call sack to the heap where objects are stored
//what needs to be constant is the value in thee stack ...what happens in the heap has nothing to do with const
marriedJessica.lastName = "davis";
console.log("Before marriage", jessica);
console.log("after marriage", marriedJessica);
//copying
const jessica2 = {
  firstName: "jessica",
  lastName: "Williams",
  age: 27,
  family: ["alic", "in", "wonderland"],
};

const jessicaCopy = Object.assign({}, jessica2); //object.assign creates a shallow copy not a deeep clone
jessicaCopy.lastName = "davis";

jessicaCopy.family.push("and");
jessicaCopy.family.push("died");

console.log("Before marriage", jessica2);
console.log("after marriage", jessicaCopy);
