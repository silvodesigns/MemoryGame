class PokeBalls{
    constructor(pokeCard){
        this.pokeCard = pokeCard;
        this.pokeType = pokeCard.dataset.ball;
        this.pokeCard.addEventListener('click', () => this.displaySymbol());
        this.pokeCard.addEventListener('click', () => this.addToList());
        this.pokeCard.addEventListener('click', () => this.updateMoves());
        this.pokeCard.addEventListener('click', () => this.rating());


    }

    displaySymbol(){

        this.pokeCard.classList.add("open");
        this.pokeCard.children[0].classList.remove('hide-it');
    }

    addToList(){
        opened.push(this.pokeCard);
        if(opened.length > 1){
             opened.splice(2, 1);
             this.compare();

       }    
    }


    compare(){

        if(opened[0].dataset.ball == opened[1].dataset.ball && opened[0].getAttribute("id") != opened[1].getAttribute("id")){
            console.log("they are the same");
            if (matched.indexOf(opened[0]) > -1 && matched.indexOf(opened[1]) > -1) {
                console.log("dont push");
            } else {

                opened.forEach(function(element){
                        matched.push(element);
                        element.classList.add('match','ani');
                })

            }
                //empty the array holding the opened pokeball cards once comparison logic is run
                opened.length = 0;


        } else {
            console.log("we do not match");
            setTimeout(function(){
                opened.forEach(function(element){
                    element.classList.remove('open');
                    element.children[0].classList.add('hide-it');
                });

                opened.length = 0;

            },300)
        }


    }

      updateMoves(){
          if(this.pokeCard.classList.contains('match') == false){
                const movesValue = moves.textContent;
                const updatedValue = parseInt(movesValue) + 1;
                moves.innerHTML = updatedValue;

          }

     }

    rating() {
        // if the moves are greater than 15 and 
        if (parseInt(moves.textContent) > 15) {
    
         //if the amount of divs containing starts in the DOM equals 3 then
         if(starts[0].children.length == 3){
    
           let remove = document.getElementById('stars');
           let toRemove = remove.firstChild;
           toRemove.remove();   }// go ahead and remove one of the stars
    
        }
        if (parseInt(moves.textContent) > 28) {
    
           if(starts[0].children.length == 2 ){
    
           var remove = document.getElementById('stars');
           var toRemove = remove.firstChild;
           toRemove.remove();  }
           
        }
    
    
    }
}
let pokeballs = document.querySelectorAll('.card');
let opened =[];
let matched =[];
let moves = document.getElementById("moves");
const starts = document.getElementsByClassName("stars");//holds all the starts displayed on page
pokeballs.forEach(function(ball){
    return new PokeBalls(ball);
});


