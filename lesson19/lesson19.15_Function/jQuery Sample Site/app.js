/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!

*/

var changImage = function () {
// $('.article-list').children().first().find('img').attr('src','http://placekitten.com/350/150');
    
    var articleList = $('.article-list');
    var firstChild = articleList.children().first();
    var firstChildImg = firstChild.find('img');
    firstChildImg.attr('src', 'http://placekitten.com/350/150');        
};

$(changImage);



