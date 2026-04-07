//js_12

function sum() {
  console.log("hello");
}

sum();

function sum2(name, age) {
  console.log(`${name} is ${age} years old`);
}

sum2("magda", 20);

//

//switch

let month = 1;

switch (month) {
  case 1:
    console.log("ianvari");
    break;

  case 2:
    console.log("tebervali");
    break;

  case 3:
    console.log("marti");
    break;

  default:
    console.log("danarcheni tveebia");
}

// case "ianvari":  console.log("axali celia")
//break

//loop
// index is the same as i - used in cycles
// i = i + 1 - same as i++
//i-- - minus one
//index+=1 - adds one to itself

for (let i = 0; i < 5; i++) {
  console.log("magda");
}

//for (let i = 0; i <= 5; i++) {
// console.log("magda");
//}

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// i++ - eshveba bolos

//
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
