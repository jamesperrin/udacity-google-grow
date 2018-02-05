/*

Directions:
Using the object from the previous quiz, answer the following quiz question:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

*/

/*
Your Code:
QUIZ QUESTION
Which of the following are valid ways to access properties and call methods from the savingsAccount object ?

[ ] savingsAccount.balance;
[ ] savingsAccount[balance];
[ ] savingsAccount["balance"];
[ ] savingsAccount."balance";
[ ] savingsAccount.withdraw = 50;
[ ] savingsAccount.removeMoney = 50;
[ ] savingsAccount.withdraw(50);
[ ] savingsAccount.removeMoney(50);

*/