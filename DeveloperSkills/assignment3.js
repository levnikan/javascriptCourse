"use strict";
console.log("coding challenge from lecture #59");
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer.
//Our most recent task is this: "Given an array of temperatures of one day,
//calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
let tmax = temperatures[0];
let tmin = temperatures[0];
for (let i = 0; i < temperatures.length; i++) {
  if (typeof temperatures[i] !== "number") continue;
  else if (tmax < temperatures[i]) tmax = temperatures[i];
  else if (tmin > temperatures[i]) tmin = temperatures[i];
}
//console.log(tmax);
//console.log(tmin);
console.log(temperatures);
console.log(`The temperature amplitude is ${tmax - tmin}!`);
// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
const temps1 = [3, -2, -6, -1, 6];
const temps2 = [-5, 6, 10, 12];
const temps = temps1.concat(temps2);
console.log(temps);
const tempsMax = Math.max(...temps);
const tempsMin = Math.min(...temps);
//console.log(tempsMax, tempsMin);
console.log(`New temperature amplitude is ${tempsMax - tempsMin}!`);
