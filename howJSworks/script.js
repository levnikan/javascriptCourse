//'use strict';

function calcAge(birthYear) {
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
//console.log(age);
