class PokeBalls{
    constructor(pokeCard){
        this.pokeCard = pokeCard;
        this.pokeType = pokeCard.dataset.ball;

    }

    displaySymbol(){

        this.pokeCard.classList.add("open");
        this.pokeCard.children[0].classList.remove('hide-it');
    }

    addToList(){
        return new Compare(this.pokeCard);
    }


   // this.pokeCard.addEventListener('click', () => this.displaySymbol());

}

class Compare(){


}