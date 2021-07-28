console.log(`This is "assignments.js" file`);
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
bmiMark = weigtMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;
markHigherBMI = bmiMark > bmiJohn;
console.log("Mark's BMI is ", bmiMark, ", John's BMI is ", bmiJohn);
console.log("Mark's BMI is higher than Johns's BMI? - ", markHigherBMI);
