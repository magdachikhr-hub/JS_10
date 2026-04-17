//arrays.js

//strings are immutable in js, we cannot change the value of a string, we can only create a new string with the desired changes.

//arrays are mutable in js, we can change the value of an array, we can add, remove or change the elements of an array.

//array methods:
//push: adds an element to the end of an array

//pop: removes the last element of an array

//shift: removes the first element of an array

//unshift: adds an element to the beginning of an array

//splice: adds or removes elements from an array - not an string method

//

//strings are immutable in js, we cannot change the value of an original string, we can only create a new string with the desired changes.
let text = "some placeholder text ";

text.slice(4, 10);
text.toUpperCase();

console.log(text);

//arrays are mutable in js, we can change the value of an array, we can add, remove or change the elements of an array.

//array methods:
//push: adds an element to the end of an array
let arr = [23, 456, 678, "some text"];

arr.push("georgia", "usa");
console.log(arr);

//pop: removes the last element of an array
let newArr = [13, 56, 234];
newArr.pop();
console.log(newArr);

//shift: removes the first element of an array
let cities = ["Tbilisi", "Gurdjaani", "Batumi"];
cities.shift();
console.log(cities);
//unshift: adds an element to the beginning of an array
let fruits = ["apple", "banana", "pineapple"];
fruits.unshift("berry");
console.log(fruits);
//splice: adds or removes elements from an array - not an string method

let vegetables = ["potatoes", "tomato", "carrot", "cabbage"];

//chaamatet tavshi cucumber

//boloshi moakelit bolo elementi

//tavshic moakelit bolo elementi

//boloshi miamatet greens, beans
