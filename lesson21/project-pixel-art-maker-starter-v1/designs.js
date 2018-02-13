/**
 * PROJECT SPECIFICATION - Pixel Art Maker
 *  https://review.udacity.com/#!/rubrics/641/view
 */

 // Global variables
const pixelCanvas = document.getElementById('pixelCanvas');
 
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
        return evt.buttons === 1;
    }
    const button = evt.which || evt.button;
    return button === 1;
}


/**
 * @name changeBackgroundColor
 * @description Function which changes the background color of a target element
 * @param {*} element - HTML target element
 * @param {string} color - Optional, background color
 */
function changeBackgroundColor(element, color) {
    // Select color input
    let colorPicker = document.getElementById('colorPicker').value;
    
    if (color) {
        colorPicker = color;
    }

    // Change target element backgournd color
    element.style.backgroundColor = colorPicker;
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
    const table = document.getElementById('pixelCanvas');
    let tr = '';
    let td = '';

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
 * @description Detects the HTML form submit event
 * @listens form submit event
 * 
 */
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Select size input height
    const height = document.getElementById('inputHeight').value;

    // Select size input width
    const width = document.getElementById('inputWeight').value;

    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
});


/**
 * @description Pixel Canvas click event to change color
 * 
 * @listens click event
 * @see
 * https://davidwalsh.name/event-delegate
 */
pixelCanvas.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'TD') {
        changeBackgroundColor(e.target);
    }
});

/**
 * @description Pixel Canvas click event to change color
 * 
 * @listens click event
 * @see
 * https://davidwalsh.name/event-delegate
 */
pixelCanvas.addEventListener('dblclick', function (e) {
    if (e.target && e.target.nodeName === 'TD') {
        changeBackgroundColor(e.target, '#ffffff');
    }
});

/**
 * @description Pixel Canvas mouseover event to change background color
 * @listens mouseover event
 */
pixelCanvas.addEventListener('mouseover', function (e) {
    if (detectLeftButton(e)) {
        if (e.target && e.target.nodeName === 'TD') {
            changeBackgroundColor(e.target);
        }
    }
});