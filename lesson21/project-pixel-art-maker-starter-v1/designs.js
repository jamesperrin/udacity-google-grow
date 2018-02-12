/**
 * PROJECT SPECIFICATION - Pixel Art Maker
 *  https://review.udacity.com/#!/rubrics/641/view
 */

/**
 * @name detectLeftButton
 * @description Detects if only the left mouse button is pressed in a mouse event
 * 
 * @param {*} e - element event
 * @returns {boolean} If left mouse button is pressed 
 * 
 * @see
 * https://stackoverflow.com/questions/3944122/detect-left-mouse-button-press
 * http://unixpapa.com/js/mouse.html
 */
function detectLeftButton(evt) {
    evt = evt || window.event;
    if ("buttons" in evt) {
        return evt.buttons == 1;
    }
    let button = evt.which || evt.button;
    return button == 1;
}


/**
 * @name changeBackgroundColor
 * @description Function which changes the background color of a target element
 * @param {*} e - element event
 */
function changeBackgroundColor(e) {
    // Select color input
    let color = document.getElementById('colorPicker').value;

    // Change target element backgournd color
    e.target.style.backgroundColor = color;
}


/**
 * @name makeGrid
 * @description Generates a HTML table grid.
 * 
 * @param {*} height - height of grid
 * @param {*} width - width of grid
 */
function makeGrid(height, width) {
    // Your code goes here!
    let tr = '';
    let td = '';
    let table = document.getElementById('pixelCanvas');

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Rows
    for (let row = 0; row < height; row++) {
        tr = document.createElement('tr');
    // Columns
        for (let col = 0; col < width; col++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}


/**
 * @description Detects the Input button click event
 * @listens click event
 * @see
 * https://davidwalsh.name/event-delegate *
 */
document.querySelector('input[type=submit]').addEventListener("click", function (e) {
    e.preventDefault();

    // Select size input height
    let height = document.getElementById('inputHeight').value;

    // Select size input width
    let width = document.getElementById('inputWeight').value;

    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});


/**
 * @description Pixel Canvas click event to change color
 * 
 * @listens click event
 * @see
 * https://davidwalsh.name/event-delegate *
 */
document.getElementById('pixelCanvas').addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'TD') {
        changeBackgroundColor(e);
    }
});


/**
 * @description Pixel Canvas mouseover event to change background color
 * @listens mouseover event
 */
document.getElementById('pixelCanvas').addEventListener('mouseover', function (e) {
    if (detectLeftButton(e)) {
        if (e.target && e.target.nodeName === 'TD') {
            changeBackgroundColor(e);
        }
    }
});