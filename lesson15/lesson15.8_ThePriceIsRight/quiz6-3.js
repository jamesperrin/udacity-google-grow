/*
Directions:
  Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

  var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

TIP: The 1 st element of any array has an index of 0.

Afterwards, print out the prices array to the console.

*/

/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[1-1] += 1;
prices[3-1] += 3;
prices[7-1] += 7;

console.log(prices);