/*
For this quiz, you'll need to add to the DOM tree that already exists.

'#family2' should be a sibling of and come after '#family1'.
'#bruce' should be the only immediate child of '#family2'.
'#bruce' should have two <div>s as children, '#madison' and '#hunter'.
*/

// Your code goes here!
var family1 = $('#family1');

var family2 = $('<div>', {
    'id': 'family2',
    'html': '<h1>Family2</h1>'
});

var bruce = $('<div>', {
    'id': 'bruce',
    'html': '<h2>Bruce</h2>'
});

var madison = $('<div>', {
    'id': 'madison',
    'html': '<h3>Madison</h3>'
});

var hunter = $('<div>', {
    'id': 'hunter',
    'html': '<h3>Hunter</h3>'
});

// var hunter = $('<div id="hunter"><h3>Hunter</h3></div>');

family2.insertAfter(family1);
family2.append(bruce);
bruce.append(madison);
bruce.append(hunter);
