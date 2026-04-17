//array/2

// [([], {}, 6767, "text")];
let fruits = ["banana", "apple"];

let cart = ["apple", "eggs", "milk", "water", "butter", "cucamber", "banana"];

// for (let i = 0; i < cart.length; i++) {
//   console.log(i, cart);
// }

// for (let i = 0; i < cart.length; i++) {
//   console.log(i, cart[i]);
// }

// console.log(cart[2]);

//

let countrys = ["georgia", "russia", "germany", "turkey"];

for (let i = 0; i < countrys.length; i++) {
  console.log(`${countrys[i]}s tickets are sold out`);
}

//

let laptops = ["lenovo", "HP", "dell", "apple"];

// of - doesnt work on numbers

for (let laptop of laptops) {
  console.log(laptop.toUpperCase());
}

let text = "brown fox jumps on a tree";

let arr = [];

for (let letter of text) {
  console.log(letter);
  arr.push(letter);
}

console.log(arr);
