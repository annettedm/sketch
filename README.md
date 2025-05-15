This project is about creating a prototype of a sketch when a user can hover a mouse over a canvas and draw something. 

There is a a webpage with a 16x16 grid of square divs with red borders.
When a user hovers over a div, it changes color (mouseover), leaving a pixelated trail like a pen

There is a button "Select squares number", when clicked, a popup is asking a user for the number of squares per side for the new grid.  A user enters a number from 0 to 100 at the pop up, and a grid with the newly entered number per side is created. A user can draw at the grid. 

// developer notes
1. a button "Select squares number" is placed at the top of the screen
2. a user clicks a button and a popup is triggered with the text "Here you can change number of squares at the canvas per side. Please enter a number from 1 to 100. Clicking 'Cancel' entering nothing will not effect the current grid."
3a. a user enters a number from 1 to 100 and clicks "Ok" → current grid is cleared, a new grid is created with number of divs entered
3b. a user enters a number less than 1 or greater than 100 and clicks "Ok" → validation at popup field and an error message on "Ok" button?
3c. a user enters nothing and clicks "Ok" → validation at popup field and an error message on "Ok" button?
3d. a user enters a non-numeric value and clicks "Ok" → validation at popup field and an error message on "Ok" button?
3e. a user enters something and clicks "Cancel" → nothing happens
3f. a user enters nothing and clicks "Cancel" → nothing happens
4. a user clicks "Ok" at the popup  → event handler on "Ok" button? clear input
5. "Ok" event handler function
    a. clear divContainer contents
    b. create divs inside divContainer. logics on number of squares and their height and width 
      → user number X user number = total number of squares
      → 960 / user number = div width = div height in pixels 



