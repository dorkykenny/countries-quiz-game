# Country quiz game

> - the game will have 2 categories, guess the capital and guess the continent
> - there will be 20 rounds, and players are given 3 lives
> - 3 lives meaning they will 3 chances when they pick the wrong answer
> - there will be a question and 4 options 
> - if they lose all their lives, they have lost the game
> - if they reach the 20th round without losing all their lives, they win



- Create project repo and files
    1. Create public project repo in personal GitHub account and name it appropriately
    2.  Create a folder for the project
    3.  Create files for the project (html, css, js)
    4. Link GitHub repo to the project folder in the local directory

- HTML
    - Put in HTML boilerplate 
    - Add headers
    - Add category buttons wrapped in a div category-container-buttons
    
    - Create a div named game-container
        - Add rounds and lives inside a game info div
        - Add question div 
        - Add options div
        - Add Next, result, and restart div

- CSS
    - Add initial styling to headers and body
    - Styling for hidden class set to display:none

- JS
    - Identify constants and variables
        - Add the countries array as a constant
        - Lives, rounds, question, options gameCategory as variables

    - Add cached element references

    - Create startGame and nextRound functions

    - Create a function for capitalCity and continent

    - Create a getRandomCountry function
        - it will access the elements in the countries array
        - return a random index
    
    - Add event listeners to the category buttons

    - Create functions for correct and incorrect answer selection


In the category function, access the getRandomCountry function and reference it as the question. Set options to an empty array. Push the correct answer to the options array. Do a loop that would get 3 random countries as the wrong answer options and push those to the options array as well.


- Make buttons for elements in the options array and add event listeners to them

- Add classes to the options separating the correct answer and incorrect answers 

- Disable the option buttons in the selectedCorrectAnswer and selectedIncorrectAnswer functions

- Make the next button visible once an option is selected and add an event listener to it and run the nextRound function once it is clicked.

- Create checkForLives and checkForWin functions
        
- Create a homepage function, and restart button and add an event listener to it running the homepage function

- Finalise styling (add some fonts, colors and contrasts)

