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

//Scoping and the temporary dead zone (TDZ)

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
