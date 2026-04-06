// alert - alert() is a JavaScript function that displays a popup message to the user and stops the script until the message is dismissed.

alert("hello");

function sayHello() {
  return "Hello World";
}

document.getElementById("first").innerHTML = sayHello();

// document - The main object that represents the whole HTML page (the DOM).
// getElementById - A method (function) used to find an element by its id.
// ("first") - The argument passed to the method — it tells JavaScript to look for an element with id="first".
// . (dot) - Used to access properties or methods of an object.
// innerHTML - A property that gets or sets the HTML content inside an element.
// = (assignment operator) - Assigns a value to something (here, it sets the content of the element).
// sayHello() - A function call - it runs the function named sayHello.
// It selects an element by ID and sets its inner content to the result of a function.
