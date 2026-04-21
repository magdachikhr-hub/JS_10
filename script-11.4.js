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
