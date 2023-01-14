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
