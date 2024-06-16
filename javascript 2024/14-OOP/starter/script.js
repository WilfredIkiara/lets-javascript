"use strict";
//constructor function

/*
//you call them with a new creater
//They start with a capital letter
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const wilfred = new Person("Wilfred", 2004);
console.log(wilfred);

//first a new empty object is created
//The function is called and the this keyword set to the new empty object
//The newly created object is linked to a prototype
//the function automatically returns {}.....i think an empty object

const matilda = new Person("matilda", 2017);
const jack = new Person("Jack", 1973);
console.log(matilda.jack);

console.log(wilfred instanceof Person);

//Prototype
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//you cann not use an arrow function here...not this keyword
console.log(Person.prototype);

wilfred.calcAge();
matilda.calcAge();

console.log(wilfred.__proto__);
console.log(wilfred.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(wilfred));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo sapients";
console.log(wilfred, matilda);
console.log(wilfred.species, matilda.species);
//own properties are hose declared on the object itself
console.log(wilfred.hasOwnProperty("firstName"));
console.log(wilfred.hasOwnProperty("species"));

console.log(wilfred.__proto__);
//object.prototype(top of prototype chain)
console.log(wilfred.__proto__.__proto__);
console.log(wilfred.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 7, 4, 3, 2, 2, 3]; //new array
console.log(arr.__proto__);
//shows all the methods for arrays
console.log(arr.__proto__ == Array.prototype);
//arrays inherit methods from array prototype
console.log(arr.__proto__.__proto__);
//it is a method for reusing code so that the methood exists only once in the javascript engine

Array.prototype.unique = function () {
  return [...new Set(this)];
};
//The code above creates a new method to thhe prototype property of the array constructor
//not a good practice
//team work
//javascript can create an actual method with the same name

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.log(h1.__proto__);
console.dir(h1);

//coding challange
const Car = function (make, speed) {
    (this.make = make), (this.speed = speed);
};
Car.prototype.accelerate = function () {
    this.speed = this.speed + 10;
    console.log(`${this.speed}km/h`);
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(`${this.speed}km/h`);
};
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car2.accelerate();
car1.break();
car2.break();

//class expression
// const PersonCl = class {}

//class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        (this.firstName = firstName), (this.birthYear = birthYear);
  }
  //methods will be added to the prototype property of the class
  calcAge() {
    console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName}`);
    }
    get age() {
    return 2037 - this.birthYear;
}
set fullName(name){
  name.includes(" ")?this.fullName = name: alert("not a full name")}
  
  get fullName(){}
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

//classes are  not hoisted
//classes are first class citizens
// classes are always executed in script mode


//getters and setters

//
const accout = {
  owner: "Wilfred",
  movement: [200, 530, 120, 300],

  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(accout.latest);

accout.latest = 50;



const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = "steven";
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init("sarah", 1979);
sarah.calcAge();

//coding challange 2

class Car {
    constructor(make, speed) {
    (this.make = make), (this.speed = speed);
}
  accelerator() {
    console.log((this.speed += 10));
  }
  brake() {
    console.log((this.speed -= 5));
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car("Ford", 120);

console.log(car1.speedUS);
car1.speedUS = 59;
console.log(car1);


const Person = function (firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduction = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student("mike", 2020, "Computer science");
mike.introduction();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

// coding challange
//this is a constructor class
// class Car {
    //   constructor(make, speed) {
//     (this.make = make), (this.speed = speed);
//   }
//   accelerator() {
    //     console.log((this.speed += 10));
    //   }
    //   brake() {
        //     console.log((this.speed -= 5));
        //   }
        //   get speedUS() {
            //     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

//this is a constructor function
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(this.speed, this.charge);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge / 100;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(this.speed, this.charge);
};
//a child class can overwrite a method that it inherited from the parent class

// console.log(EV.__proto__);
// console.dir(EV.prototype.constructor);

const car2 = new EV("Tesla", 150, 23);
car2.accelerate();
car2.chargeBattery(90);

//////////////////////////////////////////
//inheritance btwn classes
class PersonCl {
  constructor(fullName, birthYear) {
    (this.fullName = fullName), (this.birthYear = birthYear);
}
  //methods will be added to the prototype property of the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    name.includes(" ") ? (this._fullName = name) : alert("not a full name");
}

get fullName() {
    return this._fullName;
}
  //static method
  static hey() {
    console.log("Hey there");
}
}
//classes are just a way of abstriction over constructor functions
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
    //needs to haen first....creates the this keyword in the subclass
    super(fullName, birthYear); //this works as the PersonCl.call() function....for the parameters you have to call the parameters in the parent connstructor
    this.course = course;
  }
  introduction() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(`I'm ${2037 - this.birthYear} years old`);
}
}
//if you dont need any new properties for the child class there is no need for a constructor function in the child class ....it will work just fine
// const martha = new StudentCl("Mrtha jones", 2012);

const martha = new StudentCl("Matha jones", 2012, "computer science");

martha.introduction();
martha.calcAge();

//inheritance between "classes " Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
},
};
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
//studentproto inherits from personproto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init("jay", 2010, "computer science");
jay.introduce();
jay.calcAge();

/////////////////////////////////////
//encapsulation
//prevent code from outside a class ...to accidently manipulate data inside of a class
//in this lecture we wll face encapsulation

class Account {
  //public fields
  locale = navigator.language;
  
  //Private fields
  #movements = [];
  #pin;
  
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this.#pin = pin;
    //is not supposed to be touched outside of the class
    // this._movements = [];
    // this.locale = navigator.language;
    
    console.log(`Thanks for oening an account ${owner}`);
}

  //   Public methods
  //public interface

  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
}
  withdraw(val) {
    this.deposit(-val);
    return this;
}
//Aproveloan or sensitive methods in as should not be available to the public API.....shows the need for data encapsulation
requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("loan approved");
    }
    return this;
}
//private methods fake
  _approveLoan(val) {
    return true;
  }
  //real rivate method not implementable i think
  #approveLoan(val) {
    return true;
  }
  static helper() {
    console.log("Helper");
  }
}

const acc1 = new Account("Wilfred", "EUR", 1111);
// acc1._movements.push(250);
// acc1._movements.push(-150);
console.log(acc1);
console.log(acc1.getMovements()); //you can use this to get the movements
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//methods are better to avoid bugs
Account.helper();
//public fields
//private fields
// Public methods
// private methods

// console.log(acc1.#movement);

//chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
//es6 classes

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery = function (chargeTo) {
    this.#charge = chargeTo;
    return this;
  }; //this is a public api for us to be able to acces the private class #charge from the outside but not directly
  accelerate = function () {
    this.speed += 20;
    this.#charge--;
    console.log(this.speed, this.charge);
    return this;
  };
}
const car1 = new EVCl("Rivian", 120, 23);
car1.accelerate().brake().accelerate();
console.log(car1);
