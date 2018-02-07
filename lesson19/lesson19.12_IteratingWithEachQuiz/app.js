/*
For this quiz, use jQuery's each() method to iterate through the <p>s,
calculate the length of each one, and add each length to the end of each <p>.

Also, make sure you don't change the text inside each <p> except to add the length, otherwise your length numbers won't be correct!
*/

// Your code goes here!
var paragraphs = $('p');

paragraphs.each(function (index) { 
    var currentElement = $(this);
    var text = currentElement.text();
    var textCount = text.length;
    currentElement.append(textCount);
    
    // DEBUG
    //console.log(index + ": " + textCount);
});