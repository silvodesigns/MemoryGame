class PokeBalls{
    constructor(pokeCard){
        this.pokeCard = pokeCard;
        this.pokeType = pokeCard.dataset.ball;
        this.opened = [];
        this.matched = [];

        this.pokeCard.addEventListener('click', () => this.displaySymbol());
        this.pokeCard.addEventListener('click', () => this.addToList());

    }

    displaySymbol(){

        this.pokeCard.classList.add("open");
        this.pokeCard.children[0].classList.remove('hide-it');
    }

    addToList(){
        this.opened.push(this.pokeCard);
        if(this.opened.length > 1){
             opened.splice(2, 1);
             this.compare();

        }    
    }


    compare(){

        if(this.opened[0].dataset.ball == this.opened[1].dataset.ball){
            console.log("they are the same");
            if (this.matched.indexOf(this.opened[0]) > -1 && this.matched.indexOf(this.opened[1]) > -1) {
                console.log("dont push");
            } else {

                this.opened.forEach(function(element){
                        matchedCards.push(element);
                        element.classList.add('match','ani');
                })

            }

            this.opened.length = 0;


        } else {
            console.log("we do not match");
            setTimeout(function(){
                this.opened.forEach(function(element){
                    element.classList.remove('open');
                    element.children[0].classList.add('hide-it');
                });

            },300)
        }


    }


   

}



let pokeballs = document.querySelectorAll('.card');
pokeballs.forEach(function(ball){
    return new PokeBalls(ball);
});


