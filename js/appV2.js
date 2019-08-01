class PokeBalls {
  constructor(pokeCard) {
    this.pokeCard = pokeCard;
    this.pokeType = pokeCard.dataset.ball;
    this.pokeCard.addEventListener('click', () => this.displaySymbol());
    this.pokeCard.addEventListener('click', () => this.addToList());
    this.pokeCard.addEventListener('click', () => this.updateMoves());
    this.pokeCard.addEventListener('click', () => this.rating());
    reset.addEventListener('click', () => this.resetTimer());
    reset.addEventListener('click', () => this.renderShuffled());
  }


  // if the Pokeball card that I am clicking on right now
  // has not be opened yet (I check this by looking at its classes)
  // then add the class 'open' to this card and show the pokeball
  // image hidden in this card by removing the class 'hide-it'

  displaySymbol() {
    if (this.pokeCard.classList.contains('open') === false) {
      this.pokeCard.classList.add('open');
      this.pokeCard.children[0].classList.remove('hide-it');
    }
  }

  addToList() {
    // Before adding this card to the array that checks the flipped cards
    // let's make sure the card has not been matched already in order
    // to avoid bugs

    if (this.pokeCard.classList.contains('open') == true && this.pokeCard.classList.contains('match') == false) {
      opened.push(this.pokeCard);
      if (opened.length > 1) {
        opened.splice(2, 1);
        this.compare();
      }
    }
  }


  compare() {
    // compare the two pokeCards that are inside the opened array
    // by comparing its dataset value and id attribure

    if (opened[0].dataset.ball == opened[1].dataset.ball && opened[0].getAttribute('id') !== opened[1].getAttribute('id')) {
      if (matched.indexOf(opened[0]) > -1 && matched.indexOf(opened[1]) > -1) {
        console.log('dont push');
      } else {
        opened.forEach((element) => {
          matched.push(element);
          element.classList.add('match', 'ani');
        });
      }
      // empty the array holding the
      // opened pokeball cards once comparison logic is run
      opened.length = 0;
      this.won();
    } else {
      // if they do not match remove the open class
      // and add the class 'hide-it' to the pokeball image
      setTimeout(() => {
        opened.forEach((element) => {
          element.classList.remove('open');
          element.children[0].classList.add('hide-it');
        });

        opened.length = 0;
      }, 300);
    }
  }

  updateMoves() {
    if (this.pokeCard.classList.contains('open') == true && this.pokeCard.classList.contains('match') == false) {
      const movesValue = moves.textContent;
      let updatedValue = parseInt(movesValue);

      // if the amount of matched card equals 16
      // it means the game is about to be won
      // and we dont wanna update the value of moves anymore

      if (matched.length < 16) {
        updatedValue += 1;
        moves.innerHTML = updatedValue;
      }


      // start the timer once at least a move has been done
      if (updatedValue === 1) {
        timer = setInterval(this.myTimer, 1000);
      }
    }
  }

  static rating() {
    // if the moves are greater than 15 and
    if (parseInt(moves.textContent) > 15) {
      // if the amount of divs containing starts in the DOM equals 3 then
      if (starts[0].children.length == 3) {
        const remove = document.getElementById('stars');
        const toRemove = remove.firstChild;
        toRemove.remove();
      } // go ahead and remove one of the stars
    }
    if (parseInt(moves.textContent) > 28) {
      if (starts[0].children.length == 2) {
        const remove = document.getElementById('stars');
        const toRemove = remove.firstChild;
        toRemove.remove();
      }
    }
  }

  static myTimer() {
    const currentSec = parseInt(seconds.textContent);
    const currentMin = parseInt(minutes.textContent);
    const currentHour = parseInt(hours.textContent);

    seconds.innerHTML = currentSec + 1;

    if (currentSec > 59) {
      seconds.innerHTML = 0;
      minutes.innerHTML = currentMin + 1;
    }

    if (currentMin > 59) {
      minutes.innerHTML = 0;
      hours.innerHTML = currentHour + 1;
    }
  }

  static stopTimer() {
    clearInterval(timer);
  }


  static resetTimer() {
    clearInterval(timer);

    seconds.innerHTML = '0';
    minutes.innerHTML = '0';
    hours.innerHTML = '0';


    matched.length = '0';
    moves.innerHTML = '0';

    const balls = Array.from(pokeballs);
    balls.forEach((ball) => {
      ball.classList.remove('match', 'open', 'ani');
      ball.classList.add('hide-it');
      ball.children[0].classList.add('hide-it');
    });
  }


  won() {
    if (matched.length == 16) {
      this.renderShuffled();
      this.resetTimer();
    }
  }

  // Shuffle function from http://stackoverflow.com/a/2450976
  static shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue; let
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  renderShuffled() {
    const shuffled = this.shuffle(Array.from(pokeballs));
    for (let i = 0; i < shuffled.length; i++) {
      deck.appendChild(shuffled[i]);
    }
  }
}


let pokeballs = document.querySelectorAll('.card');
// opened cards will be stored here. A at a time.
let opened = [];
// all cards that have been matched will be stored here.
let matched = [];
let moves = document.getElementById('moves');
let starts = document.getElementsByClassName('stars');
// these following 3 variables hold the elements holding current timer
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');
let timer;
const reset = document.getElementById('reset');
const deck = document.getElementById('deck'); // parent element

pokeballs.forEach(ball => new PokeBalls(ball));
