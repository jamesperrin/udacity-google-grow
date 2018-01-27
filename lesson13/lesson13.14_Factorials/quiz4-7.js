/*

Directions:
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it.
For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

  3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
  4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
  5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120

Save your final answer in a variable called solution and print it to the console.

*/

/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var factoral = 3;
var solution = 1;



function factoralize(factoral) {
    let solution = 1;
    for (var x = 1; x <= factoral; x++) {
        solution *= x;
    }

    return solution;
}

// console.log(`${factoralize(factoral = 3)}`);
// console.log(`${factoralize(factoral = 4)}`);
// console.log(`${factoralize(factoral = 5)}`);
console.log(`${factoralize(factoral = 12)}`);