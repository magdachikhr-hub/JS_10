let number = 45;

function addOne(placeHolder) {
  let addValue = placeHolder + 1;
  // console.log(placeHolder + 1);
  return addValue;
}

// addOne(number);
console.log(addOne(99));

function calculateSale(price) {
  let percent = 30 / 100;
  let result = price * percent;
  return result;
}

console.log(calculateSale(50));
console.log(calculateSale(20));

//

function sum(a, b) {
  let sum = a + b;
  return sum;
}

console.log(sum(4, 6));
