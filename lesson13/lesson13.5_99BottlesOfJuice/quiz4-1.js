/*
Directions:

Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

  99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
  98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
  ...
  2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
  1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
 
Some Notes:

Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
Your text editor may try to autocorrect your ellipses ... to the ellipses character … Do not use the ellipses character for this quiz. 

*/

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    console.log(`${num} bottle${num === 1 ? '': 's'} of juice on the wall! ${num} bottle${num === 1 ? '': 's'} of juice! Take one down, pass it around... ${num - 1} bottle${(num - 1) === 1 ? '': 's'} of juice on the wall!`);
    // decrement num
    num -= 1;
}