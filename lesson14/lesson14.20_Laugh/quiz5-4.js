/*
Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

  laugh(3);

  Returns: hahaha!

*/

/*
 * Programming Quiz: Laugh (5-4)
 */

 // Normal function expression
var laugh = function (numOfHas) {
  let has = "";

  for (let i = 1; i <= numOfHas; i++) { 
    has += "ha";
  }

  return `${has}!`;
};

//ES6 arrow function function expression
var laugh = numOfHas => {
  let has = "";

  for (let i = 1; i <= numOfHas; i++) {
    has += "ha";
  }

  return `${has}!`;
};

  console.log(laugh(10));
