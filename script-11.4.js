// let sentence = "quick brown fox jumpsss on a tree";

function findLongestWord(sentence) {
  let array = sentence.split(" ");
  console.log(array);

  let longestWord = array[0];

  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  console.log(longestWord.length);
}

findLongestWord("quick brown fox jumpsss on a tree");
findLongestWord("hello i love javascript");
findLongestWord("one two three four five ten seventeen");

//

let number = 25;

function simpleOrComposed(num) {
  if (num <= 0) {
    console.log("arc martivia arc shedgenili");
  } else {
    let multiple = 0;
    for (let i = 1; i < 25; i++) {
      if (num % i === 0) {
        multiple++;
      }
    }
    console.log(multiple);
    if (multiple > 2) {
      console.log("shedgenilia");
    } else {
      console.log("martivia");
    }
  }
}

simpleOrComposed(9);
simpleOrComposed(23);
