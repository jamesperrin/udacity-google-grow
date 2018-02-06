/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item');

// Version 1
// articleItems.first().find('ul').remove();

// Version 2
articleItems.first().children('ul').remove();

// Version 3 - From video solution
//articleItems.first().children().remove('ul');