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

/*
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
*/
/*
/////Call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  alCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.alCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.alCode}${flightNum}`, name });
  },
};
lufthansa.book(234, 'Ivan Levchenko');
lufthansa.book(635, 'Nickolay Levchenko');

const eurowings = {
  airline: 'Eurowings',
  alCode: 'EW',
  bookings: [],
};
//now book is regular function not a method of lufthansa
const book = lufthansa.book;

//call method
book.call(eurowings, 23, 'Tatyana Levchenko');
console.log(eurowings);
book.call(lufthansa, 555, 'John Wall');
console.log(lufthansa);
const swiss = {
  airline: 'Swiss Airlnes',
  alCode: 'LX',
  bookings: [],
};
book.call(swiss, 586, 'Marry Jane');
console.log(swiss);

//Apply method
const flighData = [583, 'George Cooper'];
book.apply(swiss, flighData);
console.log(swiss);
book.call(swiss, ...flighData);

/////Bind method
//book.call(eurowings, 23, 'Tatyana Levchenko');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(58, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//with Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// same with function calling function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answer = prompt(
      `${this.question}\n ${this.options.join('\n')}\n(Write option number)`,
      ''
    );
    for (const i in this.options) {
      if (this.options[i].startsWith(answer)) {
        poll.answers[answer]++;
      }
    }
    const type = prompt('Input type of result message ("array" or "string")');
    this.displayResults(type);
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      //let pollresults = [...poll.answers];
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

//const newOption = poll.options.join('\n'); //create one string of options array
/*const registerNewAnswer = function () {
  let answer = prompt(
    `${poll.question}\n ${poll.options.join('\n')}\n(Write option number)`,
    ''
  );
  for (const i in poll.options) {
    if (poll.options[i].startsWith(answer)) {
      poll.answers[answer]++;
    }
  }
  const type = prompt('Input type of result message ("array" or "string")');
  displayResults(type);
};*/
/*const displayResults = function (type = 'array') {
  if (type === 'string') {
    //let pollresults = [...poll.answers];
    console.log(`Poll results are ${poll.answers.join(', ')}`);
  } else if (type === 'array') {
    console.log(poll.answers);
  }
};*/
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//// Bonus - Jonas solution
//BONUS TEST DATA 1: [5, 2, 3]
//BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
