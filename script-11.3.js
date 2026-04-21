// 'red' 'Orange' 'Yellow' 'Green' 'Blue'

let colors = ["red", "Orange", "Yellow", "Green", "Blue"];

// colors.shift()

// console.log(colors)

for (let i = 0; i < colors.length; i++) {
  // console.log(colors[i])
}

let numbers = [12, 354, 657, 87, 345];

for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i] + 765324)
}

let words = ["shdj", "jhdgf"];

// for (let i = 0; i < words.length; i++){
//     console.log(words[i].toUpperCase())
// }

let arr = [];

for (let i = 1; i <= 10; i++) {
  // arr.push(i)
  arr.unshift(i);
}

// console.log(arr)

//    !6 = 1 * 2 * 3 * 4 * 5 * 6

let fact = 1;

for (let i = 1; i <= 6; i++) {
  fact = fact * i;
  //    console.log(fact)
}

// console.log(fact)

// 1*1  - 1    1*2 = 2   2*3 = 6  6*4 = 24  24*5 =

let number = 77;

if (number <= 0) {
  console.log("ეს რიცხვი არც მარტივია არც შედგენილი");
} else {
  let ჯერადებისრიცხვი = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      ჯერადებისრიცხვი++;

      if (ჯერადებისრიცხვი === 3) {
        break;
      }
    }
  }

  console.log(ჯერადებისრიცხვი);

  if (ჯერადებისრიცხვი > 2) {
    console.log("shedgenilia");
  } else {
    console.log("martivia");
  }
}

let userAge = 5;

function findLongestWordLength(sentence) {
  let wordsArray = sentence.split(" ");

  let longerWord = wordsArray[0];

  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longerWord.length) {
      longerWord = wordsArray[i];
    }
  }
  console.log(longerWord, longerWord.length);
  return longerWord.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

findLongestWordLength(
  "What is the average airspeed velocity of an unladen swallow",
);

findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology",
);
