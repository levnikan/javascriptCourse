'use strict';
/*
//default parametrs
const bookings = [];
const createBooking = function (
  fligtNum,
  numPassangers = 1,
  price = numPassangers * 199
) {
  //in ES5
  //numPassangers = numPassangers || 1;
  //price = price || 199;
  const booking = { fligtNum, numPassangers, price };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123'); // LH123, 1, 199
createBooking('LH123', 2, 800); // LH123, 2, 800
createBooking('LH123', 5); // LH123, 5, 995
createBooking('LH123', undefined, 5000); //numPassangers - will be default parametr
*/
/*
const flight = 'LH234';
const ivan = {
  name: 'Levchenko Ivan',
  passport: 23456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 23456789) {
    alert('Check in!');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, ivan);
console.log(ivan);
console.log(flight);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(ivan);
checkIn(flight, ivan);
*/

/*
//Function accepting callback functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Trasformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('👍');
};
document.body.addEventListener('click', high5);
['Ivan', 'Tatyana', 'Mariya'].forEach(high5);
*/
// functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// same with arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Ivan');
greeterHey('Koshka');
greet('Hello')('Ivan');
greetArrow('Hi')('Ivan');
