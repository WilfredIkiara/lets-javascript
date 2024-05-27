"use strict"//this activates strict mode//this has to be the first line
//strict mode makes it easy to write js code
//strict mode identifies errors and the line ...makes it easier to debug
/*
let has_drivers_license = false;

const pass_test = true;

// if (pass_test)has_driver_license = true;

// if(has_drivers_license)console.log("i can drive")

// const interface = "Audio"//strict mode gives a  error for reserved words 
//FUNCTIONS

//a function is  piece of code that we can reuse within our code

function logger(){
    console.log("my name is Wilfred");
}
//calling// running // invoking a function...all mean the same thing
logger();
logger();
logger();

function fruit_processor(apples, oranges){
    
    const juice = `juice with ${apples} apples and ${oranges} oranges `;
    
    return juice;
}

const apple_juice = fruit_processor(5, 0);

console.log(apple_juice);

const apple_orange_juice = fruit_processor (2, 4);
console.log(apple_orange_juice);

//keep your code dry....donot repeat yourself 
let birth_year = 1991

//FUNCTION DECLARAION

const age1 = calculate_age1(1991);//the function is called bbefore it is declared

function calculate_age1(birth_year){
    return 2037 - birth_year;
}


console.log(age1)

//FUNCTION EXPRESSION

const calc_age2 = function (birth_year){//this is function expresion
    return 2037 - birth_year;
}
//const age2 = calc_age2(birth_year);
const age2 = calc_age2(1991);//function must be called after initialisation
console.log(age1, age2);


const calc_age2 = function (birth_year){//this is function expresion
    return 2037 - birth_year;
}

//ARROW FUNCTION

const calc_age3 = birth_year => 2037 - birth_year;
const age3 = calc_age3(1991);
console.log(age3);

const years_left_to_retire = (birth_year, first_name) => {
    const age = 2037 - birth_year;
    const retirement = 65 - age;
    // return retirement;
    return `${first_name} retires in ${retirement}  years`;
}

console.log(years_left_to_retire(1991, "wilfred"));
console.log(years_left_to_retire(1981, "ikiara"));

function cut_fruit_pieces(fruit){
    return fruit + 6;
};

function fruit_processor(apples, oranges){
    
    const apple_pieces = cut_fruit_pieces(apples);
    const orange_pieces = cut_fruit_pieces(oranges);
    const juice = `juice with ${apple_pieces} apples and ${orange_pieces} oranges `;
    
    return juice;
};

console.log(fruit_processor(2, 3));

const calc_age = function(birth_year){
    return 2037 - birth_year;
}

const years_left_to_retire = (birth_year, first_name) => {
    const age = calc_age(birth_year); 
    const retirement = 65 - age;
    // return retirement;
    if (retirement){
        return retirement;
    }else{
        console.log(`${first_name} has areadyy retired`)
    }
    
}
console.log(years_left_to_retire(1961 , "wilfred"))


const dolphins_total_score = 44 + 23 + 71
const koolas_total_store = 65 + 54 + 40

const calc_average = total_score => total_score/ 3;

function check_winner(dolphins_avg_score, koolas_avg_score){
    
    if ((dolphins_avg_score*2) >= koolas_avg_score){
        console.log(`DOLPHINS WON!! The dolphins got${dolphins_avg_score} : while the Koola's got ${koolas_avg_score}`)
    }else if ((koolas_avg_score*2) >= dolphins_avg_score){
        console.log(`KOOLAS WON!! The dolphins got${dolphins_avg_score} : while the Koola's got ${koolas_avg_score}`)
    }else{
        console.log(`The dolphins got${dolphins_avg_score} : while the Koola's got ${koolas_avg_score} .....nobody won`)
    }
    
}

const koolas_avg_score = calc_average(koolas_total_store);
const dolphins_avg_score = calc_average(dolphins_total_score);
check_winner(dolphins_avg_score, koolas_avg_score);

//DATA STRUCTURES
//arrays

//array is a container into which we can store variables and process them latter

const friends = ["jervis","Mwenda", "isaac", "mbaruts"]
console.log(friends)

const years = new Array(1991, 1984, 2008, 2020, 2024)
console.log(years[2])

console.log(friends[0])

console.log(friends.length);//same no of elements in an array
console.log(friends[friends.lenght-1])//to get the last element

friends[1]="Ardian";
console.log(friends);
const name = ["Wilfred","Koome"]
const wilfred = [name[0], name[1], 2024-2004, friends[1]];

console.log(wilfred)

const calc_age = function(birth_year){
    return 2037 - birth_year;
}

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = (calc_age(year[0]));
const age2 = (calc_age(year[1]));
const age3 = (calc_age(year[years.length -1]));

console.log(age1)
console.log(age2)
console.log(age3)

const ages = [(calc_age(year[0])), (calc_age(year[1])), (calc_age(year[year.length - 1]))]

console.log(ages)
//ARRAY METHODS


const friends = ["jervis","Mwenda", "isaac", "mbaruts"];
// const new_length = friends.push("Allan");
//push adds elements to the end of an array

// console.log(new_length)//gets the length of the added element
friends.unshift("Mwendi");//adds  to the begining of an array

//REMOVE ELEMENTS
//remove last

// const popped = friends.pop();//pops out the last element of the array
//the pop function returns the poped element which is stored in popped
// console.log(friends);
// console.log(popped);

//remove first

// friends.shift()//removes the furst element of the array

// console.log(friends.indexOf("jervis"));

//to check if the element is in the array of not...boolean value
console.log(friends.includes("isaac"))
console.log(friends.includes("fred"))
//does not do type coersion
//number look for nummber if string look for string

let tip, bill;
const bills = [125, 555, 44]
const tips= [];
function calc_tip(bill){
    if(bill >= 50 && bill <= 300 ){
        tip = bill * 0.15;
    }else{
        tip = bill * 0.2;
    }
    console.log(tip)
    return tip;
}

tips.push(calc_tip(bills[0]))
tips.push(calc_tip(bills[1]))
tips.push(calc_tip(bills[2]))

console.log(tips)

const total = [bills[0]+tips[0],bills[1]+tips[1], bills[1]+tips[2]]

const wilfred_array = [
    "wilfred,",
    "Kooe",
    29,
    "archer"
    
]
//OBJECTS ORDER DOES NOT ATER DURING RETRIEVAL
//OBJECT LLITERAL SYNTAX
//OBJECTS GROUP TOGERTHER CHARACTERISTICS
const wilfred_object = {
    first_name : "wilfred",
    last_name : "Koome",
    age : 2024 - 2004,
    jobs : "programmer",
    friend : ["jervis", "isaac", "Mbaruts"],
};

console.log(wilfred_object)
//DOT NOTATION

console.log(wilfred_object.last_name);
console.log(wilfred_object["last_name"]);
console.log(wilfred_object["last_name"]);

const name_key = "_name";
console.log(wilfred_object["first" + name_key]);
console.log(wilfred_object["last" + name_key]);

const intrest = prompt("What do you ant to know about jonas, choose twn first_name , last_name, age , and friends")
console.log(wilfred_object[intrest]);//combines the prompt and the object to find what is in the object

if (wilfred_object[intrest]){
    console.log("we do not have that property")
}else{
    console.log("wrong request ......What do you ant to know about jonas, choose twn first_name , last_name, age , and friends")
}

wilfred_object.location = "Meru"//adds location to the object meru

console.log(wilfred_object)

//"jonas has 3 friends, and his best friend is michael"
console.log(`${wilfred_object.first_name} has ${wilfred_array.friend.length}friends. His best friend is ${wilfred_array.friend[0]}`)


const wilfred = {
    firstName : "wilfred",
    lastName : "koome",
    birthYear : 2004,
    job : "programmer",
    friends : ["Michael", "Peter", "Steven"],
    hasDriversLisence : true,
    
    
    calc_age : function (){
        console.log(this)//this refers to this object
        return 2037 - this.birthYear;// it is equal to the object calling the method
        //helps to keep the code dry
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calc_age()} year old. ${this.job} and he has ${this.hasDriversLisence ? "a" : "no"} drivers license`;
    }

    /* 
    this does  not work since it is declarred
    function (birth_year){
        return 2037 - birth_year
    }
    */
   /*
};
console.log(wilfred.calc_age());
console.log(wilfred["calc_age"]());

//wilfred is a 46 year old teacher
let has_driver_license ;

if(has_driver_license){
    has_driver_license = "a"
}else {
    has_driver_license = "no"
}
console.log(`${wilfred.firstName} is a ${wilfred.calc_age()} year old ${wilfred.job} and he has a ${has_driver_license} drivers lisence`)
console.log(wilfred.getSummary());


const john = {
    full_name : "John Smith",
    mass : 92 ,
    height : 1.95,

    calc_bmi : function (){
        return this.mass / this.height ** 2;
    },
}
const mark = {
    full_name : "Mark Miller",
    mass : 78 ,
    height : 1.69,
    
    calc_bmi : function (){
        return this.mass / this.height ** 2;
    },
}

if (mark.calc_bmi() > john.calc_bmi()){
    console.log(`${mark.full_name}'s BMI (${mark.calc_bmi()}) is higher than ${john.full_name}'s BMI(${john.calc_bmi()})`)
}else if (john.calc_bmi() > mark.calc_bmi()){
    console.log(`${john.full_name}'s BMI (${john.calc_bmi()}) is higher than ${mark.full_name}'s BMI(${mark.calc_bmi()})`)
}else {
    console.log("you tied")
}

//THE FOR LOOP
for(let i = 1;i <=10;i++){
    console.log(`lifting operation ${i}`);
};

//FOR LOOPS IN ARRAYS

const wilfred_array = [
    "wilfred,",
    "Kooe",
    29,
    "programmer",
    ["archer", "peter", "steven"]
]

const types = [];
for(let i = 0;i<wilfred_array.length;i++){
    console.log(wilfred_array[i], typeof(wilfred_array[i]));
    
    types[i] = typeof(wilfred_array[i])//adding values to an empty array
    types.push(typeof wilfred_array[i]);//when adding you should use push cause it adds at the end instead of begining
    //it is better than unshift
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0;i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages)

//CONTINUE AND BREAK

//continue is to exit the current iteration of the loop
//break gets out of the whole loop
console.log("---ONLY STRINGS---")
for(let i = 0;wilfred_array.length; i++){
    if(typeof wilfred_array[i] !== "string") continue;
    
    console.log(wilfred_array[i], typeof wilfred_array[i])
};

console.log("---ONLY NUMBERS---")
for(let i = 0;wilfred_array.length; i++){
    if(typeof wilfred_array[i] !== "number") break;
    
    console.log(wilfred_array[i], typeof wilfred_array[i])
};

const jonas = [
    "jonas",
    "schredtmann",
    2037 - 1991,
    "teacher",
    ["michael", "peter", "steven"]
];
for(let i = jonas.length-1; i >=0;i--){
    console.log(jonas[i]);
}
//nested loop
for(let i = 1; i <= 3; i++){
    console.log(`----------STARTING EXERCISE ${i}`)
    for(let y = 1; y<=5; y++){
        console.log(`lifting weight repetition ${y}`)
    }
}

//WHILE LOOP
let i = 1;
let y = 0;
while(i <=10){
    console.log(`lifting weight repetition ${y}`)
    i ++
    
    while (y <= 2){
        console.log(`while----------STARTING EXERCISE ${i}`);
        y++
    }
}

let dice = Math.trunc(Math.random() * 6)+ 1;
console.log(dice)
while (dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6)+ 1;//new value of dice to prevent an infinity loop
    if (dice === 6) console.log("----loop is about to end.........");
}


//coding challange
// const arr= [];
const tips = [];
const totals = [];
const bills = [22, 295, 176, 440, 37, 105,10, 1100, 86,52];
let bill, tip, total, sum = 0;

for (let i = 0 ; i < bills.length; i++){
    calc_tip(bills[i]);
    tips.push(tip);
    total = (bills[i] + tip)
    totals.push(total);
};
function calc_tip(bill){
    if(bill >= 50 && bill <= 300 ){
        tip = bill * 0.15;
    }else{
        tip = bill * 0.2;
    }
    return tip;
}
const calc_average = function(arr){
    // return average;
    
    for(let i = 0; i < arr.length; i++){
        sum = arr[i] + sum;
        // sum += arr[i]
        return sum / arr.length;
    }
}

console.log(calc_average(totals));
console.log(calc_average(tips))

*/

