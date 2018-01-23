 /*
      Directions:

      Write an if ...else statement that:

      prints "even" if the number is an even number
      prints "odd" if the number is an odd number

          Hint: Use the % (modulo) operator to determine if a number is even or odd.
          The modulo operater takes two numbers and returns the remainder when the first number is divided by the second one:

          console.log(12 % 3);
          console.log(10 % 4);

          Result:
          0
          2

          The answer
          
          for 12 % 3 is 0 because twelve divided by three has no remainder.
          10 % 4 is 2 because ten divided by 4 has a remainder of two.

      Make sure to test your code with different values.For example:

      If number equals 1, then odd should be printed to the console.
      If number equals 12, then even should be printed to the console.

     */

 /*
  * Programming Quiz: Even or Odd (3-2)
  *
  * Write an if...else statement that prints `even` if the 
  * number is even and prints `odd` if the number is odd.
  *
  * Note - make sure to print only the string "even" or the string "odd"
  */

 // change the value of `number` to test your if...else statement
 var number = 2;

 if (number % 2 === 0) {
     console.log('even');
 } else {
     console.log('odd');
 }