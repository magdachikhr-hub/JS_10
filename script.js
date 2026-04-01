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
  // correct username = "admin"
  // correct password = "1234"
  // return:
  // "Welcome admin" if correct
  // "Wrong password" if username correct but password wrong
  // "User not found" if username wrong

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
