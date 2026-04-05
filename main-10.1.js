// function sayHello() {
//   return "Hello World";
// }

// console.log(sayHello());

// // document.getElementById("demo").innerHTML = sayHello();

// var1 = sayHello();

// alert(var1);

// //
// function toCelsius(farenheit) {
//   return (5 / 9) * (farenheit - 32);
// }

// let value = toCelsius(77);

// console.log(value);
// document.getElementById("demo").innerHTML = "The Value is " + value;

// //

// function myFunction(a, b) {
//   return a * b;
// }

// function numbers(a, b) {
//   return a - b;
// }

// let x = myFunction(4, 5);
// let y = numbers(10, 4);
// let z = numbers(102, 80);
// console.log(x);
// console.log(y);
// console.log(z);

// document.getElementById("demo").innerHTML =
//   "X & Y & Z sum is " + x + " and " + y + " and " + z;

// //

// let x1 = prompt("sheiyvane 1 mamravli");
// let x2 = prompt("sheiyvane 2 mamravli");

// let answer = myFunction(x1, x2);
// console.log(answer);
// document.getElementById("demo").innerHTML = "namravli = " + answer;

//
// function calc(a, b) {
//   let x10 = document.getElementById("f1").value;
//   let x11 = document.getElementById("f2").value;
//   let x12 = x10 * x11;
//   document.getElementById("demo").innerHTML = x12;
//   console.log(x12);
// }

// function calc2(a, b) {
//   let x13 = document.getElementById("f3").value;
//   let x14 = document.getElementById("f4").value;
//   let x15 = x13 - x14;
//   document.getElementById("demo2").innerHTML = x15;
//   console.log(x15);
// }

// function calc3(a, b) {
//   let x16 = document.getElementById("f5").value;
//   let x17 = document.getElementById("f6").value;
//   let x18 = x16 / x17;
//   document.getElementById("demo3").innerHTML = x18;
//   console.log(x18);
// }

// function calc4(a, b) {
//   let x19 = Number(document.getElementById("f7").value);
//   let x20 = Number(document.getElementById("f8").value);
//   let x21 = x19 + x20;
//   document.getElementById("demo4").innerHTML = x21;
//   console.log(x21);
// }

// function calc5(a, b) {
//   let x22 = document.getElementById("f9").value;
//   let x23 = document.getElementById("f10").value;
//   let x24 = x22 % x23;
//   document.getElementById("demo5").innerHTML = x24;
//   console.log(x24);
// }

// function calc6(a, b) {
//   let x25 = document.getElementById("f11").value;
//   let x26 = document.getElementById("f12").value;
//   let x27 = x25 ** x26;
//   document.getElementById("demo6").innerHTML = x27;
//   console.log(x27);
// }

function sayHello(name) {
  return "Hello" + name;
}
let greeting = sayHello(" John");

document.getElementById("demo").innerHTML = greeting;

console.log(sayHello(" John"));

//

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let name1 = fullName("John", "Doe");
document.getElementById("demo2").innerHTML = "The name is " + name1;

//

function myFunction(x, y = 10) {
  return x + y;
}

document.getElementById("demo3").innerHTML = myFunction(5);

console.log(myFunction(4));

//

// function multiply(a, b) {
//   return a * b;
// }

// let total = multiply(2, 3) * 10;

// document.getElementById("demo4").innerHTML = "the total is " + total;

//

function multiply(a, b) {
  // return "done";
  return a * b;
}

let result = multiply(4, 3);

document.getElementById("demo5").innerHTML = "the product is " + result;

//

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Access granted";
}

answer = checkAge(16);

document.getElementById("demo6").innerHTML = answer;

// cycle

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// document.getElementById("demo7").innerHTML = findMax(4, 5, 6);

//

function findMax() {
  max = arguments[2];

  return max;
}

document.getElementById("demo8").innerHTML = findMax(4, 5, 6);

// w3school

function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}

document.getElementById("demo9").innerHTML = myFunction(4);

//

///function hoisting

const sayHello3 = function () {
  return "hello world";
};

document.getElementById("demo10").innerHTML = sayHello3();

//

function run(fn) {
  return fn();
}
const sayhello2 = function () {
  return "helloo";
};
let x = run(sayhello2);
document.getElementById("demo11").innerHTML = x;
console.log(run(sayhello2));

//

function run1(gio) {
  return gio;
}

const sayhello4 = function (a, b) {
  return a * b;
};

let y = sayhello4(4, 5);

let x1 = run1(y);
console.log(x1);
document.getElementById("demo12").innerHTML = x1;

//

// arrow function syntax

const multiply2 = (a, b) => a * b;
let result3 = multiply2(4, 5);

document.getElementById("demo13").innerHTML = "the product is: " + result;

//
const hello = () => "hellow world";
document.getElementById("demo14").innerHTML = hello();

//

function greetUser() {
  return "გამარჯობა, კეთილი იყოს თქვენი მობრძანება!";
}

console.log(greetUser());
console.log(greetUser());

//
function calculateSum() {
  let a = 15;
  let b = 25;
  let result = Number(a + b);
  return result;
}

console.log(calculateSum());

//
function showSecret() {
  return secretWord;
}

let secretWord = "AI-2026";
console.log(secretWord);

//

function getPotPrice() {
  let getPotPrice = 45;
  return getPotPrice;
}

document.getElementById("demo15").innerHTML = getPotPrice();

//

function earlyExit() {
  return "პირველი";
  return "მეორე";
}

// when it reads the first one it doenst look at the second one

// block 2
//

function sayHelloTo(name) {
  return name14; //?
}

let name14 = "ლევანი";
let name15 = "გახუა";
let name16 = "ანა";

console.log(sayHelloTo(name14));
console.log(sayHelloTo(name15));
console.log(sayHelloTo(name16));

//
function calcArea(width, height) {
  let result = width * height;
  return result;
}

console.log(calcArea(10, 20));

//

function power(base, exponent = 2) {
  let power = base ** exponent;
  return power;
}

console.log(power(5));
console.log(power(5, 3));

//
function checkAge(age) {
  if (age < 18) {
    return "too young";
  }
  return "Access granted";
}

console.log(checkAge(13));

//
