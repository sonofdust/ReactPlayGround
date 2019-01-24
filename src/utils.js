console.log("utils.js is running");

const square = num => Math.pow(num, 2);

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
export { square, add, subtract as default };
// exports - default export named export
