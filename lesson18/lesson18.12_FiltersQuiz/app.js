/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');

// Select H1 - Cool Articles.
h1 = articleList.siblings('h1');

// Select all children of .article-list
kids = articleList.children();

//kids = articleList.find('*');
/*
jQuery Find()
http://api.jquery.com/find/
Unlike most of the tree traversal methods, the selector expression is required in a call to.find().
If we need to retrieve all of the descendant elements, we can pass in the universal selector '*' to accomplish this.
*/

// Select parents of .article-list
// div.container div.articles
parents = articleList.parents();

// Restricts to only DIV elemetns.
//parents = articleList.parents('div');

console.log(h1, kids, parents);