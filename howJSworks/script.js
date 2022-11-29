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

/*
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
*/

// ****Regular and arrow functions
//object has not his own scope!
//! var create property firstNam in global object Window
//var firstNam = 'Tanya';

const ivan = {
  firstNam: 'Ivan',
  birthYear: 1987,
  calcAge: function () {
    //console.log(this);
    console.log(2022 - this.birthYear);

    //Solution 1 - self or that
    //const self = this;
    //const isMillenial = function () {
    //  console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    //};
    //isMillenial();

    //Solution 2 - arrow function
    const isMillenial = () => {
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(`hey ${this.firstNam}`);
    //console.log(this);
  },
};
ivan.greet();
ivan.calcAge();
//console.log(this.firstNam);

//Arguments keywords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(6, 8);
addExpr(6, 8, 8, 5);

var addArrow = () => {
  console.log(arguments);
  return a + b;
};

addArrow(5, 8, 9);
