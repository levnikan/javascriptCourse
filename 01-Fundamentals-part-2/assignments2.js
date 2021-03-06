"use strict";
/*console.log("JS Fundamentals. Part 2. Coding challenge #1");

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}!)`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}!)`);
  } else {
    console.log("No winner!");
  }
}

console.log("Testing Data 1:");
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
console.log("\n");
console.log("Testing Data 2:");
avgDolphins = calcAverage(85, 54, 71);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);*/

/*function calcTip(billValue) {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else if ((billValue <= 50 && billValue > 0) || billValue >= 300) {
    return billValue * 0.2;
  } else {
    console.log("Error! Check your bill!!!");
  }
}
console.log(`The tip is ${calcTip(100)}$!`);
//working with arrays
const bills = [155, 555, 54];
console.log("Bills are ", bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips are ", tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Total values are `, totals);

// additional task
// function expression & ternaryoperator
const calcTip1 = function (billValue) {
  let tip =
    billValue > 50 && billValue < 300 ? billValue * 0.15 : billValue * 0.2;
  return tip;
};
const bills1 = [50, 200, 300];
console.log("Bills are ", bills1);
const tips1 = [calcTip1(bills1[0]), calcTip1(bills1[1]), calcTip1(bills1[2])];
console.log("Tips are ", tips1);
const totals1 = [
  bills1[0] + tips1[0],
  bills1[1] + tips1[1],
  bills1[2] + tips1[2],
];
console.log(`Total values are `, totals1);

// arrow function
let calcTip2 = (billValue) => {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else return billValue * 0.2;
};
const bills2 = [0, 100, 1000];
console.log("Bills are ", bills2);
const tips2 = [calcTip2(bills2[0]), calcTip2(bills2[1]), calcTip2(bills2[2])];
console.log("Tips are ", tips2);
const totals2 = [
  bills2[0] + tips2[0],
  bills2[1] + tips2[1],
  bills2[2] + tips2[2],
];
console.log(`Total values are `, totals2); */

// JS Fundamentals. Part 2.Coding Challenge #3
/*const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  weight: 78,
  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.calcBmi());
const john = {
  fullName: "John Smith",
  height: 1.98,
  weight: 92,
  calcBmi: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};
console.log(john.calcBmi());
if (mark.calcBmi() < john.calcBmi()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${
      mark.fullName
    }'s (${mark.bmi.toFixed(2)}))`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${
      john.fullName
    }'s (${john.bmi.toFixed(2)}))`
  );
}*/
/*
console.log("Fundamentals part 2. Coding challenge #4");

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (billValue) => {
  if (billValue > 50 && billValue < 300) {
    return billValue * 0.15;
  } else return billValue * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log("Bills are", bills);
console.log("Tips are", tips);
console.log("Totals are", totals);

//BONUS1
const calcAverage = function (arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  console.log(`The average of array is ${sum / arr.length}`);
};
calcAverage(totals);
calcAverage(tips);
//BONUS2
const calcAverage2 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage2(totals));
console.log(calcAverage2(tips));
*/
