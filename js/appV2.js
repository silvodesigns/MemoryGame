class PokeBalls{
    constructor(pokeCard){
        this.pokeCard = pokeCard;
        this.pokeType = pokeCard.dataset.ball;
        this.pokeCard.addEventListener('click', () => this.displaySymbol());
        this.pokeCard.addEventListener('click', () => this.addToList());
        this.pokeCard.addEventListener('click', () => this.updateMoves());
        this.pokeCard.addEventListener('click', () => this.rating());
        reset.addEventListener('click', ()  => this.resetTimer(pokeCard));
        reset.addEventListener('click', ()  => this.renderShuffled());

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
            this.won();

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
                //start the timer once at least a move has been done
                if(updatedValue == 1){
                   timer = setInterval(this.myTimer,1000);
                }
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
        myTimer() {

            const currentSec = parseInt(seconds.textContent);
            const currentMin = parseInt(minutes.textContent);
            const currentHour = parseInt(hours.textContent);
        
            seconds.innerHTML =  currentSec + 1 ;
        
            if (currentSec > 59) {
        
                seconds.innerHTML = 0;
                minutes.innerHTML = currentMin + 1;
        
            }
        
            if (currentMin > 59) {
        
                minutes.innerHTML = 0;
                hours.innerHTML = currentHours + 1;
        
        
            }
        
        }

        stopTimer(){
            clearInterval(timer);
        }


        resetTimer(pk){
            clearInterval(timer);

             seconds.innerHTML = "0";
             minutes.innerHTML = "0";
             hours.innerHTML = "0";

  
            matched.length = "0";
            moves.innerHTML ="0";
  
             pk.classList.remove('match','open','ani')
             pk.classList.add('hide-it');
             pk.children[0].classList.add('hide-it');

             

        }


        won(){
            if(matched.length == 16){
             //stop timer if all cards have been matched
            this.stopTimer();
            alert("You have Won");
            }

            
        }

        // Shuffle function from http://stackoverflow.com/a/2450976
        shuffle(array){

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

         renderShuffled(){
             const shuffled = this.shuffle(pokeballs);
             for (i = 0; i < shuffled.length; i++) {
                deck.appendChild(shuffled[i]);
            }
             
             

         }
        
}
let pokeballs = document.querySelectorAll('.card');
let opened =[];
let matched =[];
let moves = document.getElementById("moves");
let starts = document.getElementsByClassName("stars");
// these following 3 variables hold the elements holding current timer 
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hours");
var timer;
const reset = document.getElementById("reset");
const deck = document.getElementById("deck"); //parent element

pokeballs.forEach(function(ball){
    return new PokeBalls(ball);
});


