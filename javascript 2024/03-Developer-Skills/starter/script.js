// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// const calc_age = birthYear => 2037 - birthYear;

// console.log(calc_age(1991));
// //ask the right questions
/* 
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, -12, 5];
let max = temperature[0],
  min = temperature[0];

const calc_min = function (temperature) {
  for (let i = 0; i < 10; i++) {
    // if (temperature[i] === "error" || temperature[i + 1] === "error") {
    //   continue;
    // }
    const curlTemp = temperature[i];
    if (typeof curlTemp !== "number") continue;

    if (curlTemp > max) max = curlTemp;
    if (curlTemp < min) min = curlTemp;

    // if (temperature[i] > temperature[i + 1]) {
    //   min = temperature[i + 1];
    // }
    // if (temperature[i] < temperature[i + 1]) {
    //   min = temperature[i];
    // }
  }
  console.log(`The minimum number is ${min}`);
  console.log(`The maximum number is ${max}`);
  return max - min;
};

const temp_amplitude = calc_min(temperature);

console.log(`temp_amplitude = ${temp_amplitude}`);
// console.log(`min = ${min}`);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius")),
    value: 10,
  };
  console.log(measurement);
  console.table(measurement); //shows the code in a nicely formated table
  
  console.log(measurement.value);
  // console.warn(measurement.value); //this shows the value measurement.value as a warning at the console in red
  // console.error(measurement.value); //this shows as an eror to the console
  
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

//using a debugger

const calc_min_bug = function (t1, t2) {
  const temperature = t1.concat(t2);
  console.log(temperature);
  
  let max = 0;//bug
  let min = 0;//bug
  
  for (let i = 0; i < 10; i++) {
    // if (temperature[i] === "error" || temperature[i + 1] === "error") {
      //   continue;
      // }
      const curlTemp = temperature[i];

    if (typeof curlTemp !== "number") continue;
    
    debugger; //automatically opens the debugger when saved
    if (curlTemp > max) max = curlTemp;
    if (curlTemp < min) min = curlTemp;
    
    // if (temperature[i] > temperature[i + 1]) {
      //   min = temperature[i + 1];
      // }
      // if (temperature[i] < temperature[i + 1]) {
        //   min = temperature[i];
        // }
      }
      console.log(`The minimum number is ${min}`);
      console.log(`The maximum number is ${max}`);
      return max - min;
    };
    //identify
    const temp_amplitude_bug = calc_min_bug([3, 5, 1], [9, 0, 5]);
    
    console.log(temp_amplitude_bug);
    
    // const arr = [17, 21, 23];
    const arr = [12, 5, -5, 0, 4];
    const print_forecast = function (arr) {
      for (let i = 0; i < arr.length; i++) {
        console.log(`...${arr[i]} in ${i + 1} days...`);
      }
    };
    console.log(print_forecast(arr));
*/

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// console.log(`...${arr1}⁰C...${arr2}⁰C...`)
const print_forecast = function (arr) {
  let str = " ";
  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}⁰C in ${i + 1} days`; //This for loop adds the numbers to a vaue string that is a string and is thus added as a string
    //using he for loop allows all the strings to be added to str and the string is prirnted ate the end of the loop
  }
  console.log(`${str} ...`);
};
print_forecast(arr1);
