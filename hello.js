/*//
 Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need 
 to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to 
 perform a specific task.

declaring a function sayHello that outputs a string to the console.
const sayHello = function () (
  console.log("Hello, world");
)
// Calling or invoking the funtion using parentheses notation sayHello()
sayHello(); */

// a funtion with a name as a value input called a parameter.
// Function parameters are variables that are accessible and can be used within a funtion
// and whose values vary and are set when we call the function
const sayHello = function (name) {
  console.log("Hello, " + name);
}

// Calling the function
sayHello("Tolu");
sayHello("Laura");
sayHello("Bolu");
sayHello('Iyanu');
// a functionality has been greeted to greet anyone
