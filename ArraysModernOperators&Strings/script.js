'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
////result
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(37);
  console.log(output);
}
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // property without function keyword - new syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //ES6 enhased objects literals
  openingHours,
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    adress,
  }) {
    console.log(`Order received! 
    ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} 
    will be delivered to ${adress} at ${time}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient);
    console.log(otherIngridients);
  },
};*/

/*
/////working with the strings part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!!!');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(new String('ivan'));
console.log(typeof new String('ivan'));
console.log(typeof new String('ivan').slice(1));
*/
/*
/////working with the strings part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'iVAN'; //ivan
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

//comparing email
const email = 'hello@ivan.io';
const loginEmail = ' Hello@Ivan.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate')); //regular expression

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Mig'));
console.log(plane.startsWith('Air'));
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of New Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Wellcome on board!!!');
  }
};
checkBaggage('I have laptop, some Food, pocket knife');
checkBaggage('I have socks and camera');
checkBaggage('Got some snacks und gun for protection');

//split and join method
console.log('a+very+nice+string'.split('+'));
console.log('Ivan Levchenko'.split(' '));
const [firstName, lastName] = 'Ivan Levchenko'.split(' ');
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('ivan levchenko');
// pdding string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '_'));
console.log('Ivan'.padStart(25, '!').padEnd(30, '*'));
console.log(message.padEnd(25, '_'));
const maskCreditcard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditcard(4444565689788987898));
console.log(maskCreditcard('53213156465441516516'));
console.log(maskCreditcard('55555'));
//repeat method
const message2 = 'Bad weather...All departures delayded!';
console.log(message2.repeat(5));
const planesInLine = function (n) {
  console.log(`there is ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(10);
planesInLine(3);
*/

/*
//////////Maps:fundamentals
const rest = new Map();
rest.set('name', 'Classico italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open :D')
  .set(false, 'we are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(2));
const time = 7;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
//rest.clear();
console.log(rest.size);
console.log(rest.get(arr));

////////Maps Iteration
const question = new Map([
  ['question', 'What is the best PL?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);
// convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
let answer = Number(prompt('Your answer'));
console.log(answer);
if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
console.log(question.get(question.get('correct') === answer));
// convert map to array
console.log([...question]);
console.log([question.entries()]);
console.log([...question.keys()]);
console.log([question.values()]);
*/
/*
///////////////////////SETS
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(new Set('Ivan')); //string set
console.log(orderSet.size); // size of set (number of unique elements)
console.log(orderSet.has('Pizza')); //check of inclusion
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread'); // adding element in set
orderSet.delete('Risotto'); // delete element
//orderSet.clear(); //clear set
console.log(orderSet);
for (const order of orderSet) console.log(order); //loping set
//Set example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('levchenkoivan').size);
*/
/*
//////LOOPing objects
//property names

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);
//
const entries = Object.entries(openingHours);
console.log(entries);
//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}*/
/*
////////Optional chaining?////
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
//With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
//with methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisott?.(0, 1) ?? 'Method does not exist');
//with arrays
//const users = [{ name: 'Ivan', email: 'hello@gmail.com' }];
const users = [];
console.log(users[0]?.name ?? 'User array is empty');
if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('user array empty');
}*/

//if (restaurant.openingHours.fri) {
//  console.log(restaurant.openingHours.fri.open);
//}
/*
// The FOR-OF loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}*/

/*
//////Logical Assignment operators

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
//rest2.numGuest = rest2.numGuest || 10;
//rest1.numGuest = rest1.numGuest || 10;
//rest1.numGuest ||= 10;
//rest2.numGuest ||= 10;
//Nulish Coalesing operator
//rest1.numGuest ??= 10;
//rest2.numGuest ??= 10;

//AND assignment operator
//rest2.owner = rest2.owner && '<ANONYMOUS>';
//rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);
*/
/*
///////////////////
//Nulish Coalesing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//Nulish: null und underfined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
///////////////////////////
//Short circuiting (&& and ||)
//Use ANY data type, return ANY data type, short-crcuiting
console.log('______OR_____');
console.log(3 || 'Ivan');
console.log('' || 'Ivan');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || '' || 'Ivan' || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('______AND_____');
console.log('Ivan' && 0);
console.log('Hello' && undefined && 23 && underfined);
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'onion');
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'beef');
*/

/*
//////////
//REST pattern destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST in objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//REST pattern functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 6, 7);
add(8, 2, 9, 10, 15);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');*/
/*
/////////////
// The spread operator (...)
const arr = [6, 7, 8];
const manNewArray = [1, 2, 6, 7, 8];
console.log(manNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// copy Array
const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays
const complexMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(complexMenu);

//Iterables in JS: arrays, strings, maps, sets, NOT objects
const str = 'Ivan';
const letters = [...str, '', 'Levchenko'];
console.log(...letters, letters);
// !!!!console.log (`${...str} Levchenko`);

//Example
restaurant.orderPasta('tomato', 'beef', 'cheese');
//const ingredients = [
//  prompt("Let's make pasta. Ingredient 1?"),
//  prompt('Ingredient 2?'),
//  prompt('Ingredient 3)'),
//];
//console.log(ingredients);
//restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {
  founder: 'G.L. Buffon',
  Foundationyear: '1999',
  ...restaurant,
};
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name, restaurantCopy.name);
*/
////////////////////////////
/*
//Destructing objects
restaurant.orderDelivery({
  time: '22:30',
  adress: 'chambil2 - 3',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: 'Nukus str., 2',
  starterIndex: 1,
});



//Destructing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, tags, hours);
// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 1000;
const obj = { a: 23, b: 25, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
///////////////////////////////
//Destructing Arrays
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 value from function
//console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;

console.log(i, j, k);
// default value
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); */
