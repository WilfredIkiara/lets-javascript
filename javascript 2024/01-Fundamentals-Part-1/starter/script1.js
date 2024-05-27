// first lessonn of javascript

/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("jones")
let PI = 3.142

let my_first_job ="Programmer"
let my_current_job = "Teacher" //this is the recommended syntax

let job1 = "programmer"
let job2 = "teacher"

console.log(my_first_job)

//primitive datatypes
// numbers .....there is no diffrence between float and numbers iin javascript
// string ....sequence of characters
//bool ....true or false
//undefined....not yet defined
//null ... epty value....nnothing is there 
//symbol....a value that cannot be changed
//bigint ...integers too large to be rep ny the number typr


//dynamic typing .....javascript determines the data type of the value ...you dont have to declre it
//gives the choice of changing the datatype of a variable....can be a numbber and then be changed to a string

//coments are commented in js as "//"
//as a shortcut use ctrl + / ....shortcut for comment in js not tried in others

multi
line
coment

// js is executed from top to bottom


console.log(typeof job1)//string;
console.log(typeof job1)//string;


let javascript_is_fun = true
console.log(typeof javascript_is_fun)//bool

javascript_is_fun = "yes!"//dynamic typing
console.log(typeof javascript_is_fun)//string

let year;
console.log (year);//undefined
console.log(typeof year);//undefined

year = 2004;
console.log(typeof year);//number

console.log(typeof null)//is an error since it brins back an object

//DECLARING VARIABLES

let age = 31;
age = 18;//mutation
//let is block scoped

const birth_year = 1990// cannot be changed
//cannot be undefined or null....missing initialiser
//birth_year = 1991// if this code is run.... it creates error

const job = "life"

console.log(typeof job)//string

//var should be completely avoided ....it is the oldestway of declaring js

var work = "programmer"
work = "teacher"

//var is function scoped

//declaring variables is not mandatory

last_name = "Ikiara"
console.log(last_name)

//is a bad idea tho

//always properly declare a variable

//OPERATORS

//a operator allows us to transorm multiple values or combine multiple values 
//mathematical operators

//const age_jonas  = 2037 - 2004;
// const age_sarah = 2037 - 1990;
// console.log(age_jonas);
// console.log(age_sarah);
// console.log(age_sarah,age_jonas);

const now = 2037///const since im not  hanging the declared values
const age_jonas  = now - 2004;
const age_sarah = now - 1990;
console.log(age_sarah,age_jonas);

console.log(age_sarah*2,age_jonas/10, 2**3);
//2**3 means two to the power oof three = 8

const first_name = "jonas"
const last_name = "koome"


console.log(first_name+last_name)//jonaskoome
//to create a space in the middle we create an empty string or a sppace and add it btwn
console.log(first_name+" "+last_name)//jonas koome

let x = 10 + 5;//10 + 5 is done first= 15
x += 10
console.log(x)

//comparison operator

console.log(age_jonas>age_sarah);//gives a boolean answer

const now = 2037;
const age_jonas = now - 1991;
const age_sarah = now -2018;

console.log(now - 1991> now - 2010);

let x, y;
x=y=25-10-5; //x=y=10 , x=10,, y = 10
console.log(x, y)

const average_age = ((age_jonas + age_sarah)/2)

//division is before +
console.log(age_jonas, age_sarah, average_age)
let john_mass = 92;
let john_height = 1.92;

let mark_mass = 78;
let mark_height = 1.68;

let mark_bmi = mark_mass / (mark_height**2)
let john_bmi = john_mass / (john_height**2)
let mark_higher_bmi = (mark_bmi > john_bmi)

console.log(mark_higher_bmi)

console.log(mark_bmi, john_bmi)

john_mass = 85;
john_height = 1.76

mark_mass = 95;
mark_height = 1.88;

mark_bmi = mark_mass / (mark_height**2)
john_bmi = john_mass / (john_height**2)
mark_higher_bmi = (mark_bmi > john_bmi)

console.log(mark_higher_bmi)

console.log(mark_bmi, john_bmi)


const first_name = "jonas";
const job = "teacher"
const birth_year = 1991
const year = 2037

const jonas = "im " +first_name +" , a " +(year - birth_year)+ " years old " + job + " !"

console.log(jonas);

const jonas_new = `im ${first_name}, a ${year -birth_year} years old ${job} !`;
console.log(jonas_new)//backticks help in combining variables with strings

console.log("just an regular string...")

console.log("string with \n\
multiple\n\
lines");

console.log(`string
multiple
lines`)

const age = 19;
const is_old_enough = age 

if (is_old_enough){
    console.log("sarah can start driving license")
    
}else{
    const years_left =18 - age;
    console.log((`sarah is too young. wait another ${years_left} years :)`));
}

const birth_year = 1991;

let century;//century has to be defned before entering the if else statement

if (birth_year<= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
let john_mass = 92;
let john_height = 1.92;

let mark_mass = 78;
let mark_height = 1.68;

let mark_bmi = mark_mass / (mark_height**2)
let john_bmi = john_mass / (john_height**2)
let mark_higher_bmi = (mark_bmi > john_bmi)

console.log(mark_higher_bmi)

if(mark_higher_bmi){
    console.log(`Mark's BMI ${mark_bmi} is higher that john's ${john_bmi}`)
}else{
    console.log(`john's BMI ${john_bmi} is higher than Mark's ${mark_bmi} `)
}

console.log(mark_bmi, john_bmi)
//TYPE CONVERSION
const input_year = "1991";//when input from a user comes it comes as a string and shoulld therefore be changed
console.log(Number(input_year), input_year)//this will return the string as a number....the first is a number whiile the second is a string
console.log(Number(input_year) + 10)

console.log(Number("jonas"))// brings NaN not a number or invalid number

console.log(String(23), 23)//this channges the number to a string

//TYOE COERCION

console.log("i am" + 23 + "years old")

// the plus sign converts the number to a string

console.log("23" - "10" - 3)//this gives ten
console.log("23" + "10" + "3")//this gives the combiatio of strings
//in minus strings are converted to numbers 

let n = "1" + 1;// the plus sign conversts the number to astring resulting to 11
n = n - 1;// the string is then converted to a number  11 - 1
console.log(n); //n = 10

//can cause errors in the code 

// BOOL
//five false values when conversted to bool they are false
// zero
// Empty_String
// undefined
// null
// NaN

console.log(Boolean(0))//false
console.log(Boolean(undefined))//false
console.log(Boolean("jonas"))
console.log(Boolean({}))
console.log(Boolean(''))//false

const money = 0;//false
if (money){
    //the value put in the if is conversted to bool 
    console.log("Don't spend is all :)")
}else{
    console.log("you should get a job")
}


let height ;//undefined ///leading to falsy value
if(height){//false
    console.log("yay! height is defined")
}else {
    console.log("height is not defined")
}
//if height is zero which is a falsy value it will trigger the else block

const age = 18;

if(age === 18) console.log("you just became an adult (strict)")
    //=== checks if the value is exactly the same the if is run when age is 18)
//== performs type coersion "18" == 18 ..will return true but "18"===18 will return false
if(age == 18) console.log("you just became an adult (loose)")
    //the loose one should be avoided to avoid bugs
//pretend it does not exist

const favorite = Number(prompt("whats you favorite number"))//prompts the user to enter something
//the Number changes the value entered to a number
console.log(favorite)//the value stored in favorite is a string


if(favorite == 23){//loose
    console.log("your number is 23")
}else if(favorite === 7){//strict
    console.log("7 is a cool number")
}else{
    console.log("the number you entered is not cool")
}

if(favorite!= 23)//loose
{
    console.log("why not 23")
}else if (favorite !== 22)//strict
{
    console.log("whatever makes you happy")
}

// LOGIC OPERATORS

age = 16
A = age >= 20
B =!A //changes false to true
console.log(B)//true

const has_drivers_license = true;
const has_good_vision = true;

console.log(has_drivers_license && has_good_vision)//and
console.log(has_drivers_license || has_good_vision)//or
console.log(!has_drivers_license)//not...wil change the value to true

const should_drive = has_drivers_license && has_good_vision//true

if(should_drive){// true
    console.log("sarah is able to drive")
}else{
    console.log("someone ellse should drive")
}

const is_tired = false;
console.log(has_drivers_license && has_good_vision && is_tired)//true

if (has_drivers_license&&has_good_vision&& !is_tired){//this whole statement is true
    console.log("sarah can drive")
}else{
    console.log("someone else should drive")
}

//CODING CHALLENGE

const dolphin_avg_score = (96 + 100 + 89)/3
const koola_avg_score = (88 + 91 + 110 )/3

console.log(`The dolphins scores an average of ${dolphin_avg_score} : the koolas scores an average of ${koola_avg_score}`)

if (dolphin_avg_score > koola_avg_score && dolphin_avg_score >= 100){
    console.log("The dolphins won agains the koolas ")
}else if(dolphin_avg_score===koola_avg_score && dolphin_avg_score >= 100 && koola_avg_score >= 100){
    console.log("The game was a bit tough the two teams drawn")
}else if(koola_avg_score> dolphin_avg_score && koola_avg_score >= 100){
    console.log("The Koolas won agains the dolphins")
}else[
    console.log("No one wins the trophy...its all mine.. mineeee")
]

//SWITCH

const day = "monday";

switch(day){
    case "monday"://day is monday
    console.log("plan course structure");
    console.log("go to coding meetup");
    break;//without the break the codde continues executing
    case "teusday":
        console.log("prepare theory videos")
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("'i record videos")
        break;
    case "saturday":
    case "sunday":
        console.log("enjoy the weekend");
        break;
    default:
        console.log("Not a valid day")
}
                            
                            
3 + 4 //is an expression because it produces values
true && false && false
//Statement = if else
                            
if (23 > 10){
console.log("23 is larger")
}

//CONDITIONAL OPERATOR
const age = 23;
// if        then                  ...the next line else
age >= 18 ? console.log("i like to drink wine"):
console.log("i like to drink water");//if the age is greater than 18 .....i like to drink wine
//if the age is lower than 18 ...i like to drink water

const drink = age >= 18 ? "wine" : "water"
console.log(drink)

let drink2;
if (age >= 18){
    drink2 = "wine";
}else{
    drink2 = "water"
}

console.log(drink2)

const bill = 275

const tip = bill > 50 && bill < 30 ?  bill * 0.15 : bill * 0.2
const total = bill + tip
console.log(`your tip is ${tip}: and your bill is ${bill}: The total amount is ${total}`)
*/