// Importing all the keys and keeping them in variables

const one = document.getElementById("one").innerText;
const two = document.getElementById("two").innerText;
const three = document.getElementById("three").innerText;
const four = document.getElementById("four").innerText;
const five = document.getElementById("five").innerText;
const six = document.getElementById("six").innerText;
const seven = document.getElementById("seven").innerText;
const eight = document.getElementById("eight").innerText;
const nine = document.getElementById("nine").innerText;
const zero = document.getElementById("zero").innerText;
const dot = document.getElementById("dot").innerText;

//importing divide, mul, add, clear and ac

const clear = document.getElementById("clear").innerText;
const del = document.getElementById("delete").innerText;
const divide = document.getElementById("divide").innerText;
const mul = document.getElementById("mul").innerText;
const add = document.getElementById("add").innerText;
const sub = document.getElementById("sub").innerText;
const equal = document.getElementById("equal").innerText;

//adding function

function addition(num1, num2) {
  return num1 + num2;
}

const multiply = (num1, num2) => num1 * num2;
const dvd = (num1, num2) => num1 / num2;
const subs = (num1, num2) => num1 - num2;

console.log(addition(2, 3));
console.log(multiply(2, 3));
