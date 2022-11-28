'use strict';

/*function calcAge(birthYear) {
  const age = 2022 - birthYear;
  //console.log(firstName);
  const output = 'New output!';
  function printAge() {
    const firstName = 'Levchenko';
    let output = `My name is ${firstName}. I am ${age}, born in ${birthYear}.`;
    console.log(output);
  }
  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true; // var variable is function scoped (available inside function and ignore blocks)
    const str = `You are a millenial, ${firstName}!`;
    console.log(str);
    function add(a, b) {
      return a + b;
    }
  }
  console.log(millenial);
  printAge();
  console.log(output);
  console.log(add(5, 7));
  return age;
}
//console.log(millenial);
const firstName = 'Ivan';
console.log(calcAge(1987));
//console.log(age);*/

/*
//******Scoping and the temporary dead zone (TDZ)*****

//Variables
console.log(me);
//console.log(job);
//console.log(year);
var me = 'Ivan';
let job = 'engineer';
const year = 1987;

//Functions
console.log(addDecl(3, 7));
//console.log(addExpr(5, 5));
//console.log(addArrow(1, 10));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

//Example
console.log(NumProducts);
if (!NumProducts) {
  deleteShopingCart();
}
var NumProducts = 100;
function deleteShopingCart() {
  console.log('all products deleted!');
}

var x = 5;
const y = 8;
let z = 4;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

//*******This keyword in practice*****
console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAge(1987);

const calcAgeArr = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
calcAgeArr(1989);

const ivan = {
  firstNam: 'Ivan',
  birthYear: 1987,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.birthYear);
  },
};
ivan.calcAge();

const tanya = {
  firstNam: 'Tatyana',
  birthYear: 1988,
};
tanya.calcAge = ivan.calcAge;
tanya.calcAge();

const func = ivan.calcAge;
func();
