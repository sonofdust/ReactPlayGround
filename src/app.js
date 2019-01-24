import subtract, { square, add } from "./utils.js";
import isSenior, { isAdult, canDrink } from "./person.js";

console.log("app.js is running!!!");
console.log(square(5));
console.log(add(12, 98));
console.log(subtract(98, 18));

// console.log(isAdult(5));
// console.log(canDrink(98));
console.log(isSenior(76) ? "I  am old!!" : "I am younr!!");
