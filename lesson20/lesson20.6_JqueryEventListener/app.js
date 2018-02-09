/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/

// ES5 version
$('#my-button').on('click', function(e){ 
    $(this).remove();
    $('body').addClass('success');
});

// ES6 version
// $('#my-button').on('click', () => {
//     $(this).remove();
//     $('body').addClass('success');
// });