// exercise

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 100) {
    return "B";
  } else if (score >= 50 && score <= 100) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(79));

//

function formatName(name) {
  // "nika" → "Nika"
  // first letter uppercase, rest lowercase
}
