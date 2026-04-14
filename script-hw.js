// 1

function repeatWord(word, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += word;
  }
  console.log(result);
  return result;
}

console.log(repeatWord("hi", 3));

// 2

function printNumbers(n) {
  let result2 = "";
  for (let i = 1; i <= n; i++) {
    result2 += i;
  }
  return result2;
}

console.log(printNumbers(5));

// 3

function sum(number) {
  let result3 = 0;
  for (let i = 1; i <= number; i++) {
    result3 += i;
  }
  return result3;
}

console.log(sum(3));
console.log(sum(4));
console.log(sum(5));

// 4
let result = "";

for (let i = 0; i < 5; i++) {
  result += "*";
}

console.log(result);

// 1. მოცემულია ფუნქცია,
// function repeatWord(word, num) {
//   let result = ''
//   for () {
//     result += word
//   }
// console.log(result)
//   return result
// }

// შეავსეთ ისე რომ კონსოლში გამოვიდეს პარამეტრად გადაცემული word სიტყვა num-ჯერ გამეორებული
// ანუ repeatWord("hi", 3)   გაშვებისას აუთფუთი უნდა იყოს:    "hihihi"

// 2. მოცემულია ფუნქცია რომელშიც არის  for ციკლი:
// function printNumbers(n) {
//   let result = ''
//   for (let i = 1; i <= n; i++) {

//   }
//   return result
// }

// სწორად შეავსეთ  for ციკლის ოპერაცია , ისე რომ მაგალითად printNumbers(5)  ფუნქციის გამოძახებისას აუთფუთი იყოს  "12345"

// 3. მსგავსად შეადგინეთ sum() ფუქცია, რომელშიც გამოიყენებთ for ციკლს,
// ფუნქციას უნდა ჰქონდეს პარამეტრი number, და ფუნქციამ უნდა დაგვიბრუნოს 1 დან  ამ number-მდე რიცხვების ჯამი
// ანუ მაგალითად sum(5)  ფუნქციის გამოძახებისას აუთფუთი უნდა იყოს 15

// 4. შექმენით result ცვლადი, რომელიც თავიდან იქნება ცარიელი სტრინგი,
// შემდეგ შექმენით for ციკლი, რომელიც 5 ჯერ დატრიალდება, ანუ 5 ციკლს შეასრულებს,  თითოეულ ციკლზე result ს უნდა დაემატოს ერთი ფიფქი :      '*'
// შედეგი გამოიტანეთ კონსოლში
