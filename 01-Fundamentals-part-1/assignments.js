/*console.log(`This is "assignments.js" file`);
let country = "Uzbekistan";
let continent = "Asia";
let population = 35000000;
console.log(
  "Population of",
  country,
  "is",
  population,
  "located in",
  continent
);

console.log("CODING CHALLENGE #1!");
let weigtMark = 78;
let weightJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.92;
let bmiMark = weigtMark / heightMark ** 2;
let bmiJohn = weightJohn / heightJohn ** 2;
let markHigherBMI = bmiMark > bmiJohn;
console.log("Mark's BMI is ", bmiMark, ", John's BMI is ", bmiJohn);
console.log("Mark's BMI is higher than Johns's BMI? - ", markHigherBMI);

weigtMark = 95;
weightJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;
//bmiMark = weigtMark / heightMark ** 2;
//bmiJohn = weightJohn / heightJohn ** 2;
//markHigherBMI = bmiMark > bmiJohn;
console.log("Mark's BMI is ", bmiMark, ", John's BMI is ", bmiJohn);
console.log("Mark's BMI is higher than Johns's BMI? - ", markHigherBMI);

calculateBMI(1, 2);

function calculateBMI(weight, height) {
  return weigtMark / heightMark ** 2;
}

const calculateBMI2 = (weight, height) => {
  return weigtMark / heightMark ** 2;
};

console.log(`${calculateBMI(weigtMark, 1.9).toFixed(2)}, using 'function()'`);

console.log(
  `${calculateBMI2(weigtMark, 1.9).toFixed(2)}, using 'arrow function =>'`
);*/

console.log("CODING CHALLENGE#2!");

const weigtMark = 78;
const weightJohn = 1.88;
const heightMark = 1.69;
const heightJohn = 1.92;
if(weigtMark / heightMark ** 2>weightJohn / heightJohn ** 2){
  console.log("Mark's BMI is higher than John's!");
}else {
  console.log("John's BMI is higher than Mark's!");
}

const MarkWeight = 95;
const MarkHeight = 1.88;
const JohnWeight = 85;
const JohnHeigt = 1.76;
bmiMark = MarkWeight/MarkHeight**2;
bmiJohn = JohnWeight/JohnHeigt**2;
if(bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's(${bmiMark.toFixed(2)})!`);
}else {
  console.log(`John's BMI (${bmiJohn.toFixed(2)}) is less than Mark's (${bmiMark.toFixed(2)})!`);
}
