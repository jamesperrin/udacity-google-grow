/*

Directions:
Create an object called facebookProfile. The object should have 3 properties:

1. your name
2. the number of friends you have, and
3. an array of messages you've posted (as strings)

The object should also have 4 methods:

1. postMessage(message) - adds a new message string to the array
2. deleteMessage(index) - removes the message corresponding to the index provided
3. addFriend() - increases the friend count by 1
4. removeFriend() - decreases the friend count by 1

*/

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "James",
    friends: 10,
    messages: ["Good morning my peeps!", "Catch you on the down low."],
    postMessage: function (message) {
        this.messages.push(message);
    },
    deleteMessage: function (index) {
        if (this.messages.length > 0) {
            if (typeof this.messages[index] === "undefined") {
                console.log("Unable to find message to delete.");
            } else {
                this.messages.splice(index, 1);
            }
        } else {
            console.log("The facebook profile are messages empty.");
        }
    },
    addFriend: function () {
        this.friends++;
    },
    removeFriend: function () {
        this.friends--;
    }
};

//console.log(facebookProfile);
// facebookProfile.addFriend();
// console.log(facebookProfile.frineds)
// facebookProfile.removeFriend();
// console.log(facebookProfile.frineds)
// facebookProfile.removeFriend();
// console.log(facebookProfile.frineds)

// console.log(facebookProfile.messages);
// facebookProfile.postMessage("BOOM 1!");
// console.log(facebookProfile.messages);
// facebookProfile.postMessage("BOOM 2!");
// console.log(facebookProfile.messages);

// console.log(facebookProfile.messages);
// facebookProfile.deleteMessage(5);
//console.log(facebookProfile.messages);