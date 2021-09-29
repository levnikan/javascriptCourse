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

/*console.log("CODING CHALLENGE#2!");

const weigtMark = 78;
const weightJohn = 1.88;
const heightMark = 1.69;
const heightJohn = 1.92;
if (weigtMark / heightMark ** 2 > weightJohn / heightJohn ** 2) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

const MarkWeight = 95;
const MarkHeight = 1.88;
const JohnWeight = 85;
const JohnHeigt = 1.76;
bmiMark = MarkWeight / MarkHeight ** 2;
bmiJohn = JohnWeight / JohnHeigt ** 2;
if (bmiJohn > bmiMark) {
  console.log(
    `John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's(${bmiMark.toFixed(
      2
    )})!`
  );
} else {
  console.log(
    `John's BMI (${bmiJohn.toFixed(2)}) is less than Mark's (${bmiMark.toFixed(
      2
    )})!`
  );
}*/

/*console.log("CODING CHALLENGE#3!");

const DolphinsScore1 = 96;
const DolphinsScore2 = 108;
const DolphinsScore3 = 89;
const CoalasScore1 = 88;
const CoalasScore2 = 91;
const CoalasScore3 = 110;

const DolphinsAverageScore =
  (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
const CoalasAverageScore = (CoalasScore1 + CoalasScore2 + CoalasScore3) / 3;
console.log(`Dolphins average score is ${DolphinsAverageScore.toFixed(1)}
Coalas average score is ${CoalasAverageScore.toFixed(1)}`);

if (DolphinsAverageScore > CoalasAverageScore) {
  console.log("Dolphins are winners!!!");
} else if (DolphinsAverageScore < CoalasAverageScore) {
  console.log("Coalas are winners!!!");
} else {
  console.log("The result is draw. No winner!!!");
}

//bonus 1
const DolphinsScoreG1 = 107;
const DolphinsScoreG2 = 101;
const DolphinsScoreG3 = 101;
const CoalasScoreG1 = 99;
const CoalasScoreG2 = 93;
const CoalasScoreG3 = 105;

if (DolphinsScoreG1 > CoalasScoreG1 && DolphinsScoreG1 >= 100) {
  console.log("The winner of the game 1 is Dolphins!");
} else if (DolphinsScoreG1 < CoalasScoreG1 && CoalasScoreG1 >= 100) {
  console.log("The winner of the game 1 is Coalas!");
} else {
  console.log("No winner in game 1!!!");
}

if (DolphinsScoreG2 > CoalasScoreG2 && DolphinsScoreG2 >= 100) {
  console.log("The winner of the game 2 is Dolphins!");
} else if (DolphinsScoreG2 < CoalasScoreG2 && CoalasScoreG2 >= 100) {
  console.log("The winner of the game 2 is Coalas!");
} else {
  console.log("No winner in game 2!!!");
}

if (DolphinsScoreG3 > CoalasScoreG3 && DolphinsScoreG23 >= 100) {
  console.log("The winner of the game 3 is Dolphins!");
} else if (DolphinsScoreG3 < CoalasScoreG3 && CoalasScoreG3 >= 100) {
  console.log("The winner of the game 3 is Coalas!");
} else {
  console.log("No winner in game 3!!!");
}

const DolphinsAverageScoreBonus =
  (DolphinsScoreG1 + DolphinsScoreG2 + DolphinsScoreG3) / 3;
const CoalasAverageScoreBonus =
  (CoalasScoreG1 + CoalasScoreG2 + CoalasScoreG3) / 3;
console.log(`Bonus Dolphins average score ${DolphinsAverageScoreBonus}
Bonus Coalas average score ${CoalasAverageScoreBonus}`);
if (
  DolphinsAverageScoreBonus > CoalasAverageScoreBonus &&
  DolphinsAverageScoreBonus >= 100
) {
  console.log("The winners are Dolphins!");
} else if (
  DolphinsAverageScoreBonus < CoalasAverageScoreBonus &&
  CoalasAverageScoreBonus >= 100
) {
  console.log("The winners are Coalas!");
} else if (
  DolphinsAverageScoreBonus === CoalasAverageScoreBonus && //bonus 2
  DolphinsAverageScoreBonus >= 100 &&
  CoalasAverageScoreBonus >= 100
) {
  console.log("Both teams are winners!");
} else if (
  DolphinsAverageScoreBonus === CoalasAverageScoreBonus &&
  CoalasAverageScoreBonus < 100 &&
  DolphinsAverageScoreBonus < 100
) {
  console.log("No team wins the trophy!!!!");
} else {
  console.log("No winner in the competition!!!");
}
*/
/*
console.log("CODING CHALLENGE#4!");

const bill = 400;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and total value ${bill + tip}`
); */
