// loops.js

let arr = [234, 345, 4];

// let arr2 = [34, 'sdf', 'sdfj', 47, [364, 35], {city: 'Tbilisi', age: 5}]

arr.push("new");

console.log(arr[3]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] + 3);
}

// let arr = [23, 456, 678, 'some text']

// arr.push('georgia', 'usa')
// console.log(arr)

// arr.pop()
// console.log(arr)

// let newArr = [13, 56, 234]
// newArr.pop()
// console.log(newArr)

// for(){

// }

let pyramid = "";

// for(let i = 1; i < 10; i++){

//     for(let j = 0; j < i; j++){
//         pyramid +='*'
//     }
//     pyramid += '\n'
// }
// console.log(pyramid)

for (let i = 1; i < 10; i++) {
  for (let j = 10; j > i; j--) {
    pyramid += "*";
  }
  pyramid += "\n";
}
console.log(pyramid);
