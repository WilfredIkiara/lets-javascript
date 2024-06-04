"use strict";
/*

const weekDays = ["mon", "Teu", "Wed", "Thu", "Fri", "Sat", "Sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    //using a template litral
    open: 0, // Open 24 hours
    close: 24,
  },
  [weekDays[5]]: {
    //using a template litral
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "*" : " "}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} ${time.replace(":", "H")}`.padStart(40);
  console.log(output);
}

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //NHANCEMNT TO OBJECT LITERALS
  // openingHours:openingHours//since the names are the same we can write it asbelow
  openingHours, //this will work the sam eas thhe line above
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //it comes down to personal preference ...any can be used
  }, //this version of the code works the same as the one below
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  orderDelivery: function ({
    time = "22:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(time);
    // console.log(address);
    // console.log(mainIndex);
    // console.log(starterIndex);
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} add ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};
const question = new Map([
  ["question", "what is the best programming language in the world"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

///////////////////////////////
//CODING CHALLENGE 3

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
//CODING CHALLANGE
// underscore_case;
// first_name;
// some_variable;
// calculate_AGE;
// delayed_departure;
const names = [
  "underscore_case",
  "first_name",
  "some_variable",
  "calculate_AGE",
  "delayed_departure",
];
const newCamelCase = [];
const camelCase = function (name) {
  const lower_case = name.trim().split("_");
  const second_name = lower_case[1].toLowerCase().split("");
  lower_case[0] = lower_case[0].toLowerCase();
  const newer = second_name[0].toUpperCase() + second_name.slice(1).join("");
  lower_case[1] = newer;
  return lower_case.join("");
};
console.log(camelCase("   First_name"));
//SPLIT METHOS
//allows us to split the string into multiple parts based on a divider string
//stores the results into elements of a new array
console.log("a+very+nice+string".split("+"));
console.log("wilfred Ikiara".split(" "));

const [firstName, lastName] = "Wilfred Ikiara".split(" ");

//THE JOIN METHOD...oposite of split
//the join method joins an array using the specified ("")
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);
const namesUpper = [];
const capitalizename = function (name) {
  const names = name.split(" ");
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //what the aive code does ...it takes the first letter and capitalzes it then takes the rest of the string without the first letter using the slice method and adds the capitalised first letter to the sliced string
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase)); //produces the same result
    console.log(n);
  }
  console.log(namesUpper.join(" "));
};
const passanger = "jessica ann smith davis";
capitalizename("Wilfred");
capitalizename(passanger);

//PADDING A STRING
const message = "Go to gate 23!";
console.log(message.padStart(25, "*").padEnd(30, "*")); ///adds characters to a string till the characters are (25)....padend adds more pads

//credit card masking
const maskCreditCard = function (number) {
  const str = number + ""; //the plus sign changes the number to a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(433784738936738));
console.log(maskCreditCard("433784738936738435762890"));

// Repeat
const message2 = "Bad weather all departures delayed... ";
console.log(message2.repeat(5)); //repeats the same string the specified ammount of time
const planesInLines = function (n) {
  console.log(`There are ${n} planes in line ${("*", repeat(n))}`);
};
planesInLines(5);
planesInLines(12);

///////////////////////////////////
//WORKING WITH STRINGS

const airline = `Tap Air Portugal`;

console.log(airline.toLowerCase); //changes the whole string to lowercase or uppercase
console.log(airline.toUpperCase); //changes the whole string to lowercase or uppercase
console.log("wilfred".toUpperCase);

//fix capitalization in name
const passanger = "jOnAs";
const passangerLower = passanger.toLowerCase();
const passangerCorrect =
  passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);

//COMPARING EMAILS
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //removes the whitespace
// console.log(trimmedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim(); //is the same as the above coe just in one line
console.log(normalisedEmail);
console.log(email === normalisedEmail); //comparison of the original email

//REPLACING PARTS OF STRINGS
const priceGB = "288.97E";
const priceUS = priceGB.replace("E", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passangers come to boarding door 23, Boarding door 23";
console.log(announcement.replace("door", "gate")); //relaces only the first occurence of teh inouted string

console.log(announcement.replaceAll("door", "gate")); //replaces all

//regular expressions to replace all
console.log(announcement.replaceAll(/door/g, "gate")); //replaces all

//BOOLEANS
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //returns a boolean value
console.log(plane.includes("B320")); //returns a boolean value

console.log(plane.startsWith("Air")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  //these that return boolean are good for if conditions
  console.log("part of the new airbus family");
}

//PRACTICE EXER
//NOTE when getting input from a user we then put the input to lowercase for comparison purposes
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("you are not allowed on the plane");
  } else {
    console.log("Welcome abord");
  }
};
checkBaggage("i have a laptop, some Food and a pocket knife");
checkBaggage("Got some Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

const plane = `A320`;

console.log(plane[0]);
console.log(`B737`[0]);
console.log(airline.length);
console.log(`B737`.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("portugal")); // this method is case sensitive //not found = -1
console.log(airline.indexOf("Portugal")); // this method is case sensitive //not found = -1

//SLICE METHOD

console.log(airline.slice(4)); // air portugal
//the slice stats from position 4
//is a substring......slice does not change the original string...to use ,,the sliced string has to be stred in a variable
console.log(airline.slice(4, 7)); //air //it stops extracting before reaching index numbers 7

console.log(airline.slice(0, airline.indexOf(" "))); //exracting first word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //exracting last word

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("...you got the middle seat... ");
  } else {
    console.log("...you got lucky...");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// const events = gameEvents.map(event => event[1]);
//creating an array of unique elements from a map
const eventArr = [...gameEvents];
const events1 = [];
const events2 = [];
for (const event of eventArr) {
  events1.push(...event);
  for (const e of events1) {
    if (typeof e === "string") {
      events2.push(e);
    }
  }
}
const uniqueEventsSet = [...new Set(events2)];

// const uniqueEventsSet = new Set(events2);
// const events = [...uniqueEventsSet];
//gameEvents.values ...this code does everything in the above 10 lines of code ...jumping the one for the set
gameEvents.delete(64);

const time = [...gameEvents.keys()].pop(); //since pop removes the last element on the lists ... in the process it also returns the popped element
console.log(
  `An event happened , on average, every ${time / gameEvents.size}  minutes`
);

// rest.get(time > rest.get("open") && time < rest.get("close"));
// if(gameEvents.get([0] <= 45))
// gameEvents
for (let i = 0; i <= 100; i++) {
  let test = gameEvents.get(i);
  if (typeof test !== "undefined") {
    if (i <= 45) {
      console.log(`[FIRST HALF] ${i}: ${test}`);
    } else {
      console.log(`[SECOND HALF] ${i}: ${test}`);
    }
  }
}
//creating a set from an array
// const uniqueValues = [...new Set(arr)];
///////////////////////
//NOTES
//ARRAYS
//use arrays when you need ordered list of values (might conntain duplicates)
//use when ou need to manipulate data
//arrays have many methods

//SET
//use when you need to work with unique values
//use when high-performance is really important
//when searching sets are 10 times faster
//use to remove duplicates from arrays

//OBJECTS

//more traditional key/value
//easier to write and access values wwith []
//keys are strings
//if u need functions as values use objects
//these values/ functions are then called methods... and here you can use the this keyword which is not available in maps
//when workingg with json data you have to use objects as well
//unless you want to convert objects to maps

//MAPS

//better performance
//keys can have any datatype
//easy to iterate
//use maps when you want to mapa keys to values and when you want keys that are not strings
//////////////////////////
//

//in this array the first position is gonna e the key and teh second position is gonna be the value
//new better way of initialising maps
console.log(question);
//convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

//QUIZ APP

console.log(question.get("question"));
//so in an object we use object.entries...object.entries converts the object to an iterable
for (const [key, value] of question) {
  //the object is not an iterable
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt("your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer)); // maping value by comparing their boolean return
//we can use the boolean keys to eithher print te success message or the error message

// converting a map to an array
console.log(...question); //using a spread operator
console.log(...question.entries()); //The data type returned by this line is an iterator (specifically, an iterator over key-value pairs).
console.log(...question.keys()); //The data type returned by this line is an iterator (specifically, an iterator over keys).
console.log(...question.values()); //The data type returned by this line is an iterator (specifically, an iterator over values).

/////////////////////////////////////
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Risotto",
  "pasta",
  "pizza",
]);
//MAPS
//a map is a data structure thet we can use to map values in keys
//in maps keys can have any type, in objects its just keys

const rest = new Map();
rest.set("name", "classical Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categiries", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true)); //the datatype matters when retrieving

const time = 21;
rest.get(time > rest.get("open") && time < rest.get("close")); //this compares the time  at open and close then maps to the value using true or false  which are the last value to enter the last rest.get
//not readable tho

const arr = [1, 2];
console.log(rest.has("categories"));
rest.delete(2);
// rest.set([1, 2], "test");//not allowed
rest.set(arr, "test");
rest.set(document.querySelector("hi"), "Heading");
console.log(rest);
console.log(rest.size);

// console.log(rest.get([1, 2])); //arre not the same objects in tghe heap..not used
console.log(rest.get(arr));
//we dont use an array in maps
//we can use objects as map keys ..can be usefull in do ojects
// rest.clear();//clears everything

///////////////////////////

//the order of elements in a set is irelevant
console.log(orderSet);
console.log(new Set("Wilfred"));
console.log(orderSet.size); //returns the number of unique values in the set(original)
console.log(orderSet.has("pizza"));
console.log(orderSet.has("Bread")); //checks whether the element is in the set
orderSet.add("Galic Bread");
orderSet.add("Galic Bread");
orderSet.delete("Risotto"); //deletes from the set
// orderSet.clear();////clears
console.log(orderSet);
//there is no way of retrievng values in a set...cause tere is no need ...just use an array
for (const order of orderSet) console.log(order);

//The main use of sets is to remove duplicate values of arrays
//example
const staff = ["waiter", "chef", "waiter", "chef", "Manager", "waiter"];
const staffUnique = [...new Set(staff)]; //this code conveets a set to an array
// const staffUnique = new Set(staff);
console.log(staffUnique);
//conversion from a set to an array
//the spread operator works on all iterables
console.log(
  new Set(["waiter", "chef", "waiter", "chef", "Manager", "waiter"]).size
);
console.log(new Set("wilferdkoomeiniara").size);
//just use arrays
////////////////////////////////////////
//looping objects

//Property names
const properties = Object.keys(openingHours);

let openStr = `we ara open on ${properties.length} days `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//property values
const values = Object.values(openingHours);
console.log(values);

//looping over entire objects
const entries = Object.entries(openingHours); //stores the values in an arrays ...from my pov they look liike nested arrays
console.log(entries);

for (const x of entries) {
  // console.log(x);

  for (const y of x) {
    console.log(y);
  }
}
//[key, value]
for (const [key, { open, close }] of entries) {
  //we can destructure arrays right in the declaration of the for loop
  //we destructure key since it is first in the array.. then the object by using the variable names to get the values i the bject
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
////////////////////////////
//optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  //if oppening hours and mon is optional
  console.log(restaurant.openingHours.mon.open);
}
//with optional chaining

console.log(restaurant.openingHours.mon?.open); //in this only if the property before the question mark exists then the open property is read ...and if not undefined is returned
console.log(restaurant.openingHours?.mon?.open); //checks if retsaurant .openinghours is there the checks if it has mon the opens otherwise undefined is printed
const days = ["mon", "Teu", "Wed", "Thu", "Fri", "Sat", "Sun"];

for (const day of days) {
  //for of array destructuring
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed"; //we can not use dot here...it is not a property name since it is a variable name
  //open is defaultly set to closed
  //the nullish operator soolves the 0 falsy value
  console.log(`On ${day}, we open at ${open}`);
}
//methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist"); //checks if the method above exists and prints does not exist

//Arrays
const users = [{ name: "fred", email: "something@gmail.com" }];
console.log(users[0]?.name ?? "the array is empty"); //checks for the value in the specified array ..............this one prints fred
console.log(users[2]?.name ?? "the array is empty"); //checks for the value in the specified array....this prints the statement
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
//////////////////////////////////////
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//THE FOR OF LOOP
//new mwthod for destructuring arrays
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
for (const [i, el] of menu.entries()) {
  //destructuring
  console.log(`${i + 1}: ${el}`);
  //since there are two elemennts in the for of ...the position of the variable and the variable it self we cana use it to create a good looking list
}
// console.log(...menu.entries());

// const rest1 = {
//   name: "Caapri",
//   numGuests: 20,
// };

// const rest2 = {
//   name: "Caapri",
//   owner: "Geovani Rossa",
// };
//////////////////////
//THE OR ASSIGNMENT OPERATOR

// rest1.numberGuests = rest1.numGuests || 10; //creates a default value o ten if num guest is zero
// rest2.numberGuests = rest2.numGuests || 10; //creates a default value o ten if num guest is zero

// rest1.numGuests ||= 10; //this is the sam eas the code above
//it assigns a value to the argument if the argument is falsy
//num guest is ot allowed to be 0 for the code to work well
// rest2.numGuests ||= 10; //this is the sam eas the code above
/////////////////
//NULLISH COALESING OPERATOR(nill or undefined)
//assgns a value to a variable if the variables value is currently nullish
//solves the problem of numGuests never having too be 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && "<ANONYMOUS>"; //SINCE REST.OWNE IS TRUE ANONYMOUS IS PRINTED IN THE PART OF THE OWNER
//IN THE ABOVE CODE IF THe restaurant had no owner the value will be set and returned as undefined

// rest1.owner &&= "<ANONYMOUS>";
// && assigns a value to a vvariable if it is curently truthy
//sine the value is not true nothing happens
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);
////////////////////////////////////
//NULISH COALEASING OPERATOR

// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);
// //nullish vallues are null and undefined(NOT 0 or "")
// const guestCorrect = restaurant.numGuest ?? 10; //if the first argument is null or undefined then the second operand is executed and returned
// console.log(guestCorrect);

///logical operators
//can use any data type...can return any data type
//short-circuting
// console.log(3 || "jonas");
///which means if the first operand is true javascript does not look at the other operands
// console.log("" || "jonas"); //""is a falsy value
// console.log(true || 0); //true is true and is printed
// console.log(undefined || null); //undefined is falsy.....null is printed for some reason

// console.log(undefined || 0 || "" || "hello" || 23); //hello is short circuted sinnce it is the first truthy value to be found

// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10; //this is an operator(ternary) that checks weather restaurant.numguest is true if it is it gets printed

// const guest2 = restaurant.numGuest || 10; //this works the same as the above one...it is an easier method of creating default values
//using this method numGuest  can never be zero since it is also a falsy value
// console.log(guest2);

// console.log("----AND----");
// console.log(0 && "jonas"); //the and operator short circuits when the first value is falsy and returns the value without evaluating the next
// console.log(7 && "jonas"); //since the first value is true "jonas "is printed

// console.log("Hello" && null && "jonas"); //null is printed
//example
// if (restaurant.orderPizza) {
// restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushroms", "spinach"); //if the restaurant.orderpizza is true thenn it is skipped and the next line is looked at

////////////////////////////////////
//the rest pattern
///packs elements into an array

//SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];
//REST because on LEFT side off =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//the rest pattern must be the last in the destructuring assignment
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

//functions
// const add = function (...numbers) {
//the rest takes multiple values packing them to an array
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
// sum += numbers;
//   }
// };
// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];
// add(...x); //calling the function when the arguments are arrays using a spread to rest..here values are unpacked and the  packed by rest

// restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
// restaurant.orderPizza("mushrooms"); //rest is also used in places we would write variable names separated by a commas
/////////////////////////////////////
//THE SPREAD OPERATOR
//unpacks elements on ana array

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const arr = [7, 8, 9];
// const addNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(addNewArr);

// const newArr = [1, 2, ...arr]; //the spread element takes the values in an array and adds them to the new array
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "gnocci"];
// console.log(newMenu);
//the spread operator takes all the elements for array
//we can only use them in places we would otherwise write values separated with

// copy array
// const mainMenucopy = [...restaurant.mainMenu];

//join two arays or more

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//the spread operator works on all iterables, strings, arrays , maps ,sets but not objects

// const str = "wilfred";
// const letters = [...str, "", "s."]; //this makes each letter of the string str an ndividual element and stores the letters in teh array letters
// console.log(letters);
//the spread operator does not work in in the console.log ${}
// const ingredients = [
//   prompt("let's make pasta Ingridients 1?"),
//   prompt("ingredient 2?"),
//   prompt("ingridient 3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients); //will write the elements of the array separated by a koma

//object

// const newRestaurant = { foundedIn: 1990, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant }; //creates a copy of the object restaurant
// restaurantCopy.name = "Ristoranta Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
// const { name, openingHours, categories } = restaurant; //destructuring objects
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant; //changing the name when destructuring objects
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant; //adding a default value when destructuring objects
// console.log(menu, starters);

// default values are created since we use real wold values in applications and the values gotten can be missing so we set default values when destructuring objects or arrays
//mutating variabes
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/*,
/*
//array destructuring
//breaking a big data stracture to small ones
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; //destructuring
console.log(x, y, z);
console.log(arr);

let [
  main /*a hole which are two commas skip the element in th array*/
/*
  ,,
  secondary,
] = restaurant.categories;
// console.log(first, second);
console.log(main, secondary);

//switching variables in arrays

//without destructuring

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//with destructuuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//netsed destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);
*/

/////////////////////////////
//CODING CHALLANGE
//FOOTBALL BETTING APLICATION

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
/////////////////////////////////////////

// let sum = 0;
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${el}`);
// } //used in an array
// for (const value of Object.values(game.odds)) {
//   sum += value;
// }
// const avgOdds = sum / 3;
// console.log(Math.trunc(avgOdds));
// //3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
// const scorers = {};
// for (const player in game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);//if the player scores the number of scores is added
// }
// console.log(scorers);

///////////////////////////////////////////
// const player1 = game.players[0];
// const player2 = game.players[1];
// const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...player1, ...player2];
// const playersFinal = ["Thiago", "Coutinho", "Perisic", ...player1];
// const {
//   odds: { team1, x: draw, team2 },
// } = game; //the above piece of code renames the object x to draw

// const printGoals = function (...player) {
//   //rest operator packs the values
//   console.log(`${player.length} goals were scored`);
//   for (let i = 0; i < player.length; i++) console.log(`${player[i]} scored `);
// };
// const odd1 = game.odds.team1;
// const odd2 = game.odds.team2;
// switch (
//   true //we use true as the defination of switch since we are comparing true and false
// ) {
//   case odd1 > odd2:
//     console.log(`${game.team1} is more likely to win`);
//     break;
//   case odd2 > odd1:
//     console.log(`${game.team2} is more likely to win`);
//     break;
//   default: {
//     console.log("you did something wrong");
//   }
// }
// console.log(odd1);

// team1 < team2 && console.log(`${game.team1} is more ikely to win`); //when the first part is true the second part is printed
// team2 < team1 && console.log(`${team1} is more ikely to win`); // he && operator when the first part is true the second part is printed

// printGoals(...fieldPlayers); //spread operator spreads the vaues
// console.log(draw);
// console.log(playersFinal);
// console.log(allPlayers);
// console.log(gk);
// console.log(fieldPlayers);

///////////////////////////////
//CODING CHALLANGE 2
// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
