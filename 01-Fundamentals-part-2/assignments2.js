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

function calcTip(billValue) {
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
console.log(`Total values are `, totals2);
