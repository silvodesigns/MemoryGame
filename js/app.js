/*
 * Create a list that holds all of your cards
 */
const Cards = document.getElementsByClassName('card');
const openCards = []; // openCards array only holds a maximun of 2 cards at a time 
const matchCards = [];// matchCards array holds all cards that have matched





/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//add event listener to reset/ shuffle button
const reset = document.getElementById("reset");
const deck = document.getElementById("deck"); //parent element


reset.addEventListener('click', function() {
    matchCards.length = "0";//empty the cards that have been matched and saved in array

    for (i = 0; i < Cards.length; i++) {

        Cards[i].classList.remove("match"); //remove these classes when cards are shuffled
        Cards[i].classList.remove("open");
        Cards[i].classList.remove("ani");
        Cards[i].children[0].classList.add("hide-it");//add class to hide pokeball 
    }

    const shuffled = shuffle(Cards);
    for (i = 0; i < shuffled.length; i++) {
        deck.appendChild(shuffled[i]);
    }

    //reset counter to 0
    const moves = document.getElementById("moves");
    moves.textContent = "0";
});

//Update moves on the board
function updateMoves(card) {

   

    if(card.classList.contains("match") == false){
       const moves = document.getElementById("moves");
       const movesValue = moves.textContent;
       const newValue =  parseInt(movesValue) + 1;
             moves.innerHTML = newValue;

    }

}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//displaySymbol function displays the card's symbol when it is opened
function displaySymbol(card) {

    card.classList.add("open");
    card.children[0].classList.remove("hide-it");


}

//won function displays a screen to the user after the game has been won
function won() {

    if (matchCards.length == 16) {
        const screen = document.getElementsByClassName("win");
        screen[0].style.display = "block";
    }

}

// is fired when the users clicks on the play again button
const button = document.getElementById("play");

button.addEventListener('click', function() {
    for (i = 0; i < Cards.length; i++) {

        Cards[i].classList.remove("match", "ani"); //remove these classes when cards are shuffled
        Cards[i].classList.remove("open", "show");
        Cards[i].children[0].style.visibility ="hidden";

    }

    const shuffled = shuffle(Cards);
    for (i = 0; i < shuffled.length; i++) {
        deck.appendChild(shuffled[i]);
    }


    const moves = document.getElementById("moves");
    moves.textContent = "0";


    const screen = document.getElementsByClassName("win");
    screen[0].style.display = "none";

});





function compare(){

        //check for the classes on both cards to check if the pokeall images are the same.
        if (openCards[0].children[0].classList.value == openCards[1].children[0].classList.value) {
            console.log("they are the same");
          //to avoid inserting match cards twice in the array matchCards lets make sure they dont exist before pushing
            if(matchCards.indexOf(openCards[0]) > -1 && matchCards.indexOf(openCards[1]) >-1 ){
                console.log("dont push");
            } else {
            matchCards.push(openCards[0]);
            matchCards.push(openCards[1]);
             }


          //if they are the same lets remove it from the openCards array to the matchCards array
            openCards[0].classList.add("match", "ani");
            openCards[1].classList.add("match", "ani");
            openCards.length = 0;//empty the openCards array
            won();


        } else {
            console.log("they are not the same");
            // if they do not match lets hide the cards on the table and set a little timer before it happens
            setTimeout(function() {
                openCards[0].classList.remove("open");
                openCards[1].classList.remove("open");
                openCards[0].children[0].classList.add("hide-it");
                openCards[1].children[0].classList.add("hide-it");
                openCards.length = 0;//empty the openCards array


            }, 500);


   }
}


// AddToList function adds the cliked cards into an array temporarily to check weather the clicked cards match or no
function addToList(card) {

    //push the clicked card into an array/ detele any entry greater than two
    openCards.push(card);
    if(openCards.length > 1){
    	openCards.splice(2,1);
        compare();
   
    	
    }
    
   }


// Add event listener to each of the cards
for (i = 0; i < Cards.length; i++) {
    Cards[i].addEventListener('click', function() {

        displaySymbol(this);
        addToList(this);
        updateMoves(this);



    });
}