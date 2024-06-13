"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
//we use objects because we are pretending that the data is coming from a web Api....data from a web api comes in the form of objects

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
//////////////////////////
//THE BANKIST APP CODE
//DOM manipulation

// it is not advisable for you to write code ...if creating an app on the global context instead create a function

//it is better to pass data directly into a function instead of having the function work with a global variable

//we create a string of manipulated html and then log that to the console
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ""; //clears everything in the container....inner html is like textcontents
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${movement}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
    //the insertadjacenthtml insers the above created html to the web app
    // containerMovements.insertAdjacentHTML("beforehand", html); //it inverts the array content order
  });
};
const clacDisplaybalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const intrest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${intrest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

//event handlers

//in a form element the behaviour when we click a sumit button is for the page to reload
//hitting enter in the field of a form will trigger a click event
const updateUi = function (currentAccount) {
  displayMovements(currentAccount.movements);
  clacDisplaybalance(currentAccount);
  calcDisplaySummary(currentAccount);
};
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); //preventts form from submitting
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = " ";
    inputLoginPin.blur(); //blurs

    updateUi(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUi(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // accounts.splice(index, -1);
    accounts.splice(index, -1);
  }
  inputCloseUsername = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2, 4)); //slices the array just ike in a string
console.log(arr.slice(-2));
//CREATING A SHALLOW COPY OF AN ARRAY
console.log(arr.slice()); //this can be used to create a shallow copy of an array
console.log([...arr]); //also this can be used to createa shallow copy of an array

//SPLICE
//used too delete elements in an array
// console.log(arr.splice(2)); //it removes the returned elements in the array....the elements are completely removed from the original array
arr.splice(-1);
console.log(arr);

//REVERSE
//reverse mutates the original array
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
//concatinates the two arrays

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //gives the same result

//JOIN
//joins an array using the thing in the brackets
console.log(letters.join("-"));

///////////////////////////////
//AT METHOD
const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

//last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log("wilfred".at(-1));

//////////////////
//FOR EACH METHOD
//FOR EACH METHOD LOOPING AN ARRAY
//is a higher order function that requires a callback function to tell it what to do

//you have to pass the current element of the array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//in each call back is called (iteration), it will recieve the current elemennt of the array that the call back is being called
console.log("-------FOREACH------");
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

//0: function()//this is the call back function.....it is a function without a name...the call back function is called each time while recieving a movement in the movements array

//ACCESSING THE COUNTER VARIABLE IN A FORLOOP

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
  }
}

//ACCESSING THE COUNTER VARIABLE IN A FOR EACH

//in each iteration for each passes in : the current element, the index, and the whole array that is being looped
//all these can be specified in the parameter list
//when accessing the parameters the first is always the current element, then index, then the whole array

console.log("-------FOREACH------");
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1} : You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
  }
});

/////////////////////
//FOR EACH ON MAPS AND SETS

//FOR EACH ON MAPS
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (currency, index, map) {
  console.log(`${index}: ${currency}`);
});

//FOR EACH ON SETS
//a set does not have keys and does not have indexes either
//the index and the current value is the same in a set

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
//the underscore means a throw asway variable

////////////////////////////////
//coding challange # 1
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia = [3, 5, 2, 12, 7];
// const ages = [...dogsJulia, ...dogsKate];
let ages = [];

const checkDogs = function (dogsJulia, dogsKate) {
  const juliaCopy = [...dogsJulia];
  juliaCopy.splice(-2);
  ages = [...juliaCopy, ...dogsKate];
  
  ages.forEach(function (age, index) {
    const print =
    age >= 3
    ? console.log(
      `Dog number ${index + 1} is an adult, and is ${age} years old`
    )
    : console.log(`Dog number ${index + 1} is still a puppy`);
  });

};
checkDogs(dogsJulia, dogsKate);

////////////////////////////////////////
//ARRAY METHODS FOR DATA TRANSFORMATION
// creating new arrays by transforming other arrays

//MAP
//FILTER
//REDUCE

//MAP
//is the same as the for each
//takes an array loops over it and in each iteration applies a callback method that we specify on that array
//it builds a new array thats mmanipulated

//FILTER
//used to filter elements in an array that satisfy a certain condition

//REDUCE
//used to boil down all elements of the original array into one single value
//eg adding all the elements of an array together..the accumulated value is then return no array is created
//can also do other many diffrent things

//MAP
//returns a new array with new elements
//it also has access to the same parameters that the for each function has = "value, index, array"
///its called siilary to the for each function
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
}); //more inline with functional programing
//can be made to one line of an arrow function
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//the code below is the subtitute for the code above
//the code below is a diffret philosophy
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
const movmetsDescriptios = movements.map((movement, i) => {
  `Movement ${i + 1} : You ${
    movement > 0 ? "deposited" : "withdraw"
  } ${Math.abs(movement)}`;
});
console.log(movmetsDescriptios);

//////////////////////////////////////////
//FILTER
//in the function we return a boolean value

const deposits = movements.filter(function (movement, index, array) {
  return movement > 0;
  });
console.log(movements);
console.log(deposits);

const depositsfor = [];
for (const movement of movements) {
  if (movement > 0) depositsfor.push(movement);
  console.log(depositsfor);
}
  
const withdrawals = movements.filter(movement => movement < 0);

console.log(withdrawals);
//////////////////////////////////////////


//REDUCE

//the first parameter is the accumulator..a snowball that keeps accumulating the value of the accumulated value of the added array...the second is the current value, then index , then the whole array

// ...the reduce method has another second parameter the initial value o the accumulator....

const balance = movements.reduce(function (accumulator, current, index, array) {
console.log(`Iteration ${index} : ${accumulator}`);
return accumulator + current;
}, 0);
console.log(balance);

/////////////////////
//GET MAXIMUM VALUE USING REDUCE
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
  }, movements[0]);
  
  console.log(max);
  
  //////////////////////////////
  //CODING CHALLANGE 2
  
  const ages = [5, 2, 4, 1, 15, 8, 3];
  const ages1 = [16, 6, 10, 5, 6, 1, 4];
  
  const calcAverageHumanAge = function (ages) {
    let humanAge = [];
    ages.forEach(function (age, i) {
      if (age <= 2) {
        humanAge[i] = 2 * age;
        } else if (age > 2) {
          humanAge[i] = 16 + age * 4;
          }
          });
          const filteredAges = humanAge.filter(age => age >= 18);
          
          const avgHumanAge = filteredAges.reduce(function (acc, age) {
            return (acc + age) / humanAge.length;
}, 0);

return avgHumanAge;
};
console.log(calcAverageHumanAge(ages1));
///////////////////////////////////
//CHAINING METHODS ON ARRAYS

//here you can chain as many methods as you can as long as they create new arrays

//inside the methods you can retrieve any an array in the middle of chaining since there is an current array paraeter on both filter and map
// inncase you want to look at data in he middle of chaining

//chaining can bring real performance issues especially when you are using bifg arrays
const eurToUsd = 1.1;
const totalDeposit = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDeposit);

/////////////////////
//coding chalange
const ages = [5, 2, 4, 1, 15, 8, 3];
const ages1 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = ages =>
  ages
.map(age => (age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(ages));

//////////////////////////////////////////
//////FIND METHOD

//it needs a boolean on the call back function
//only returns the first value that maches the conditions

const firstWithdrawal = movements.find(current => current < 0);

console.log(accounts);

const account = accounts.find(acc => acc.owner === "Jessica Davis");
console.log(account);

////////////////////////////////
//FINDINDEX METHOD
//closing an account
//using splice using thhe find index method
/////////////////////////////

//The some and every array method
//returns true or false
//checks for a value in the array that alligns with the given specification

console.log(movements);
console.log(movements.includes(-13));

movements.some(mov => mov > 0);
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  });
  
  movements.sort((a, b) => a - b);
  console.log(movements);
  
  const x = new Array(7);
  console.log(x);
  // exxercise
  //create an array with 100 random dice rolls
  
  //from dom element to array
  
  labelBalance.addEventListener("click", function () {
    const movementsUI = Array.from(
      document.querySelectorAll(".movements__value"),
      el => Number(el.textContent.replace("€", ""))
      );
      console.log(movementsUI);
      
      const movementsUI2 = [...document.querySelectorAll(".movements__value")];
});
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const ownersEatTooLittle = [];
const ownersEatTooMuch = [];
let arr = [];
let arr2 = [];
let exact = [];
let okay = [];
dogs.forEach(function (cur, i) {
  cur.recommendedFood = Math.trunc(cur.weight ** 0.75 * 28);
  if (cur.owners.includes("Sarah")) {
    cur.curFood > cur.recommendedFood
      ? console.log("Too Much")
      : console.log("Too little");
  }
  if (cur.curFood > cur.recommendedFood) {
    ownersEatTooMuch.push(cur.owners);
  } else {
    ownersEatTooLittle.push(cur.owners);
  }

  if (
    cur.curFood > cur.recommendedFood * 0.1 + cur.recommendedFood ||
    cur.curFood < cur.recommendedFood - cur.recommendedFood * 0.1
  ) {
    okay.push(cur.owners);
    console.log(`Dog ${i} is okay`);
  } else if (cur.recommendedFood === cur.curFood) {
    exact.push(cur.owners);
    console.log(`Dog ${i} is exact`);
  } else {
    console.log("the dog is just out of controll");
  }
});
arr = ownersEatTooMuch.flat();
arr2 = ownersEatTooLittle.flat();
console.log(`${arr[0]} , ${arr[1]} and ${arr[2]}'s dogs are eating too much`);
console.log(
  `${arr2[0]} , ${arr2[1]} and ${arr2[2]}'s dogs are eating too little`
);
console.log(
  dogs.some(
    dog =>
      (dog.curFood > dog.recommendedFood) * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);
const dogs2 = [...dogs];
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
// dogs2.forEach(function (cur) {
//   cur.recommendedFood.sort((a, b) => a - b);
// });

dogs2.sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogs2);
