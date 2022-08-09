//Problem: Create 3 functions that would calculate a discount based on gender ("discountCalc1"
//- using if/else conditions, "discountCalc2" - using switch statement, "discountCalc3" - using ternary operators).
//The function would take two parameters -  price (number) and gender ("male", "female", "unknown") and return discounted price.
//If gender is male, function applies 10% discount.
//If gender is female, function applies 20% discount.
//If gender is unknown, function applies 30% discount.
/*
const price = prompt("Enter your price");
const gender = prompt("Enter your gender (male, female, unknown)");

// function declaration
function discountCalc1(price, gender) {
  if (gender === "male") {
    console.log(`Your price with discount is ${price * 0.9} euro.`);
  } else if (gender === "female") {
    console.log(`Your price with discount is ${price * 0.8} euro.`);
  } else if (gender === "unknown") {
    console.log(`Your price with discount is ${price * 0.7} euro.`);
  } else {
    console.log("Please enter correct gender!");
  }
}
discountCalc1(price, gender);

//function expression
const discountCal2 = function (price, gender) {
  switch (gender) {
    case "male":
      console.log(`Your price with discount is ${price * 0.9} euro.`);
      break;
    case "female":
      console.log(`Your price with discount is ${price * 0.8} euro.`);
      break;
    case "unknown":
      console.log(`Your price with discount is ${price * 0.7} euro.`);
      break;
    default:
      console.log("Please enter correct gender!");
  }
};
discountCal2(price, "male");

//arrow function
let discountCalc3 = (price, gender) => {
  gender === "male"
    ? console.log(`Your price with discount is ${price * 0.9} euro.`)
    : gender === "female"
    ? console.log(`Your price with discount is ${price * 0.8} euro.`)
    : gender === "unknown"
    ? console.log(`Your price with discount is ${price * 0.7} euro.`)
    : console.log("Please enter correct gender!");
};
discountCalc3(price, gender); */
