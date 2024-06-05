"use strict";
/////////////////////////
/*
//default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 4,
  price = 199 * numPassengers
) {
  //Es5
  //   numPassengers = numPassengers || 1; //shortcircuting
  //   price = price || 1.99;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", undefined, 800); //skiping a default parameter

const flight = "LH234";
const wilfred = {
  name: "Wilfred",
  passport: 345673456,
};
const checkIn = function (flightNum, passanger) {
  flightNum = "LH999";
  passanger.name = "Mr" + passanger.name;

  if (passanger.passport === 345673456) {
    alert("Check in");
  } else {
    alert("Wrong password");
  }
};
checkIn(flight, wilfred);
console.log(flight);
console.log(wilfred);

//javascript does not have passig by reference and not by value
///reference types ....wehen we manipulate the object in the function it changes the value of the real object
//this is because the object is in the heap and not the callstack
// passing a primitive type to a fuction is like making a copy

const newPassport = function (person) {
  person.passport = Math.random() * 100000000000;
};
newPassport(wilfred);
checkIn(flight, wilfred);

//js treats functions as firstclass citizens
// functions are just another "type " of objects
//wwe can return functions from other functions
//function methods
////////////////////////////////
//HIGHER ORDER FUNCTIONS

const oneWord = function (str) {
    return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...other] = str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
};
//higher order function takes in a function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
    console.log(`Transformed by: ${fn.name}`); //gets the name of the function
};
transformer("javascript is the best!", upperFirstWord);
transformer("javascript is the best!", oneWord);
//the function is not called it is passed...note

//js uses callbacks all the time
//makes us be able to split up code for reusing
//callback functions allow us to create obstractions

//obstraction is hiding the details of a call back function because we dont really care of the details of that call back function

//the transformer function delegates the work of string manipulation to the lower level functions oneword and the other ....this is obstruction

const high5 = function () {
    console.log("*");
};
document.body.addEventListener("click", high5);
["Wilfred", "Martha", "Adam"].forEach(high5);


////////////////////////
//having fnctions return other funnctions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
//creating the above function using an arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");

//this function greet returned a new functio which is now stored in greeterHey...
//we enter the first parameter ...then the parameter is stored with the function ....then the return function is the one left withoout a parameter
greeterHey("wilfred");
greeterHey("Jervis");

//this works due to things called closures
greet("Hello")("Jonas"); //the function can be called this way
greetArrow("Hello")("wilfred");
//notice that the parameters are entered in different brackets

/////////////////////////////////
//MANUAL MANNIPULATION OF THE THIS KEYWORD

const lufthansa = {
    airline: "lufyhansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
            //the this keyword points to the lufthansa object
        );
        this.bookings.push({
            flight: `${this.iataCode} ${flightNum}, name`,
    });
  },
};
lufthansa.book(239, "Wilfred Ikiara");
lufthansa.book(365, "John mike");
console.log(lufthansa);

const euroWings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const book = lufthansa.book; //this is possible because js has first class functions

//does not work
// book(23, "Sarah williams");

//telling the this keyword what will be eneterd

book.call(euroWings, 23, "Sarah Williams");
//the above code tells the this keyword the object book is gonna be run on
//we called the call methd that will call the this keyword set to eurowings
book.call(lufthansa, 237, "Mary Cooper");
console.log(euroWings);

const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
};

book.call(swiss, 583, "Wilfred Ombwamba"); //this points the this keyword to he swiss object

//APPLY Method

//apply does not recieve the list after (583, "Wilfred Ombwamba")...instead it recieves an array

const flightData = [583, "Wilfred Ombwamba"];
book.apply[(swiss, flightData)];

book.call(swiss, ...flightData); //tis is the same as the apply since call can do exactly what apply can

//BIND METHOD
//bind doesnt immediatly call a function instead it returns a function

//will return a new function where the this keyword will always be set to eurowings

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven WIlliams");
//here we dont need to specify the this keywrd againn

const bookEW23 = book.bind(euroWings, 23);
//creates a permanent flightnumber 23
//this is permanent
//the remaining functiion oly needs the name

bookEW23("WIlfred Ikiara");
bookEW23("Jervis Mwenda");

//Event listeners and obects , bind

lufthansa.planes = 300;
lufthansa.buyplane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document
.querySelector(".buy")
.addEventListener("click", lufthansa.buyplane.bind(lufthansa));
//in an event handler function the this keyword is attached to the element that the event andler is attached to
//here we need to manually define the this keyword

//PARTIAL APPLICATION
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//this presets the rate value to 0.23
console.log(addVAT(23)); //the parameter entered is the value

//here you create a new more specific function from a general function

/////////////////
//incomplete coding exercise
//note all objectives were achieved but the teacher didi it difrent llook at athe final folder
const poll = {
  question: "What is your favorite programming language ?",
  options: ["0: javascript", "1: python", "2: Rust", "3: c++"],
  //this generates [0,0,0,0], More in the next section
  answers: new Array(4).fill(0),
  displayResults: function () {
    return console.log(`Poll results are [${this.answers}]`);
  },
};
function userPrompt() {
    const arr = [];
    for (let i = 0; i < poll.options.length; i++) {
        arr.push(`\n ${poll.options[i]}`);
    }
    //he used this.options.join("\n")
    const registerNewAnswer = Number(
        prompt(`${poll.question} ${arr} \n (Write option number)`)
    );
    if (registerNewAnswer >= 0 && registerNewAnswer < poll.answers.length) {
        poll.answers[registerNewAnswer]++;
    } else {
        alert("Invalid input. Please enter a valid option number.");
    }
    poll.displayResults();
}

const pollbtn = document.body.querySelector(".poll");
pollbtn.addEventListener("click", userPrompt);

//////////////////////////
//IIFIE - IMEDIATLY INVOKED FUNCTION EXPRESSION

const runOnce = function () {
    console.log(`this eill never run again`);
};
runOnce();
//THE IMEDIATLY INVOKED FUNCTION EXPRESSION
(function () {
  console.log(`this eill never run again`);
})(); //transforming a statement to an expression by adding the ()
//you call the above fuction by addig the parenthesis at the end

(() => console.log("this will also never run again"))();
//there is no need to create a new function to create a new scope
{
    const inPrivate = 26;
    //this creates a new scope
    //so there is no need ti create new functions just to create neew scopes
}
//if you want to create a fuunction that is executed just once then the (iife....the imediatly invoked functions expression pattern is the way to go)

////////////////////////////////
///CLOSURES
//it is no a feature that we explicitly use
//it happens automaticallly and as a developer we should know when it happens
const secureBooking = function () {
    let passangerCount = 0;
    
    return function () {
        passangerCount++;
        console.log("passangers", passangerCount);
    };
};

const booker = secureBooking();
//the secureBooking fuction has already finished its execution and the execution context is no longer in the stack

//teh bbooker function is able to acces the variable passangercount even when it does not exist
//this is made possible by the closurer

//what happens a new execution context is created in the stack

//any function always has access to the variable environment of the execution context where the function was created even after the execution context is gone

//laymans language ...a function has access to variables where it was created

booker(); //passanger 1
booker(); //passanger 2
booker(); //passanger 3

//the returned function is stored in the variable booker...now booker acts as a function in its self

//closure is the closed over varaible environment of the execution context in which a function was created even after that execution context is gone
//gives a function acces to all the variables of its parent function

console.dir(booker); //taking a look at the backpack in closure

let f;

const g = function () {
  const a = 23;
  f = function () {
      console.log(a * 2);
    };
    //   f();
};
const h = function () {
    const b = 777;
    f = function () {
    console.log(b * 2);
};
};

g();
f();
h();
f();

console.dir(f);

const boardPassangers = function (n, wait) {
    const perGroup = n / 3;
    
    setTimeout(function () {
        console.log(`we are now boarding all ${n} passangers`);
        console.log(`There are 3 groups, each with ${perGroup} passagers`);
    }, wait * 1000); // TIMER
    ///the firs parameter is a function that will be executed after a certain  time in miliseconds.....1000 = 1 second
    console.log(`Will start boarding in ${wait} seconds`);
};
boardPassangers(180, 3);

////////////////////////////////
//CODING CHALLANGE

(function () {
    const header = document.querySelector("h1");
    header.style.color = "red";
    
    document.querySelector("body").addEventListener("click", function () {
        header.style.color = "blue";
    });
})();

*/
