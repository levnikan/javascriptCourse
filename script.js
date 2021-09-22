/*console.log(`This is "script.js" file`);
let js = "JS is amazing!";
console.log(40 + 48 - 11 * 8);
console.log('Ivan');
let firtstName = 'Ivan';
let age = 34;
console.log(firtstName);
console.log(age);
firtstName = 'Vano';
console.log(firtstName);
let _name = "Sergey";
let $name = 'ivan';
console.log(_name, $name);*/

/*const firtstName = "Ivan";
const job = "engeneer";
const birthYear = 1987;
const year = 2021;
const Ivan =
  "I'm " + firtstName + ",a " + (year - birthYear) + " years old " + job + "!";
console.log(Ivan);
const ivanNew = `I'm ${firtstName},a ${birthYear} years old ${job}!`;
console.log(ivanNew);
console.log(ivanNew);*/

/*const age=17;
//const isOldEnough=age>=18;
if(age>=18) {
  console.log('Sarah can start driving license');
} else {
  const yearsLeft = 18 - age;
  console.log(`Saarah is too young. Wait for ${yearsLeft} years!`);
}

const birthYear = 2001;
let century;
if(birthYear <= 2000){
  century = 20;
}else{
  century =21;
}
console.log(century);*/

/*const birthYear = "1987";
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 18);
console.log(Number("Ivan"));

let n = "1";
console.log(n + 1);
console.log(n - 1);
console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - "2" + "5");*/

/*console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean(90));

const money = 10;
if (money) {
  console.log("Don't spend it all!!!");
} else {
  console.log("You should get a job!");
}

let hight = 10;
if (hight == 0) {
  console.log("Hight is 0");
} else if (hight) {
  console.log("Hight is defined");
} else {
  console.log("Hight is undefined!");
}*/
/*
const age = "18";
if (age === 18) {
  console.log("You are adult - strict");
}
if (age == 18) {
  console.log("You are adult - loose");
}

const favouriteNum = Number(prompt("What's your favourite number?"));
console.log(favouriteNum);
console.log(typeof favouriteNum);

if (favouriteNum === 23) {
  console.log("23 is a cool number!");
}

if (favouriteNum !== 23) {
  console.log("Why not 23?");
} else if (favouriteNum === 23) {
  console.log("Cool!");
}*/

//arrow functions
const calcAge = (birthYear) => 2021 - birthYear;
const age = calcAge(1987);
console.log(age);
const yearsUntilretirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilretirement(1987, "Ivan"));

//Functions calling other functions
const cutPieces = function (fruit) {
  return fruit / 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor(8, 16));
