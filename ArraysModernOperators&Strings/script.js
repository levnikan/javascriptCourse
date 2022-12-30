'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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
};
///////////////////
//Nulish Coalesing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
//Nulish: null und underfined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

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
