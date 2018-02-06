/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;
// Version-1
// navList = $('.nav-item').first();
// navList.find('a').attr('href','#1');

// Version-2
// navList = $('.nav-list .nav-item:first-child');
// navList.find('a').attr('href', '#1');

// Version-3
navList = $('.nav-list');
navList.children().first().find('a').attr('href', '#1');

// var firstItem = navList.children().first();
// var link = first.find('a');
// link.attr('href', '#1');

