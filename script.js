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
  let formatName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return formatName;
}

let nameOfUser = "nika";

console.log(formatName(nameOfUser));

//
function logIn(username, password) {
  if (username === "admin" && password === "1234") {
    return "welcome admin";
  } else if (username === "admin" && password !== "1234") {
    return "wrong password";
  } else if (username !== "admin") {
    return "user not found";
  } else {
  }
}

console.log(logIn("admin", "1111"));

//

function getDiscount(price) {
  if (price > 100) {
    return price * 0.8;
  } else if (price > 50) {
    return price * 0.9;
  } else {
    return price;
  }
}

console.log(getDiscount(200));

// exercises

// function getGrade(score) {
//    90+ → "A"
//    70-89 → "B"
//    50-69 → "C"
//    below 50 → "F"
// }
// function formatName(name) {
//    "nika" → "Nika"
//    first letter uppercase, rest lowercase
// }

// function login(username, password) {
//    correct username = "admin"
//    correct password = "1234"
//    return:
//    "Welcome admin" if correct
//   "Wrong password" if username correct but password wrong
//   "User not found" if username wrong
// }
// function getDiscount(price) {
//   if price > 100 → 20% discount
//    if price > 50 → 10% discount
//    otherwise → no discount
//   return final price after discount
// }
