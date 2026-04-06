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

// other stuff that can be used
// Instead of document - document is the main object for the page, but there are others:
// window → represents the browser window
// console → used for debugging (e.g. console.log())
// document.body → the <body> of the page

// Instead of getElementById() -
// document.getElementById("id") → by ID
// document.getElementsByClassName("class") → by class
// document.getElementsByTagName("p") → by tag name
// document.querySelector("selector") → first match (VERY common)
// document.querySelectorAll("selector") → all matches

// Instead of .innerHTML -
// innerHTML → sets HTML content
// textContent → sets plain text
// innerText → similar to textContent (but respects styling)
// value → for input fields
// style → to change CSS
// classList → to add/remove classes

// examples:
// element.textContent = "Hello";
// element.style.color = "red";
// element.classList.add("active");
