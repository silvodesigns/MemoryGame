import React from 'react';
import './GameBoard.css';


class GameBoard extends React.Component {


    state = {
        openedCards: [],
        matchedCards: []
    }



    displayCard = event => {

        const pokeCard = event.target;

        //if the current pokeball I am clicking has not been opened yet
        // add the class 'open' to it and its child image
        // and reveal the Pokeball to the user by removing the class that hides it

        if (pokeCard.classList.contains('open') === false && this.state.openedCards.length < 2) {
            pokeCard.classList.add('open');
            pokeCard.children[0].classList.remove("hide-it");
            pokeCard.children[0].classList.add("open");

        }

        //Every time a pokeCard is cliked and revealed to the user 
        //lets insert it into the openedCards property of our state
        //there should only be 2 opened cards in the array at any given time

        if (this.state.openedCards.length < 2) {
            var copyOfState = this.state.openedCards.concat(event.target);
            this.setState({ openedCards: copyOfState }, () => this.compare())
        } else {
            this.setState({ openedCards: [] })
        }
    }

    compare() {
        // compare the two pokeCards that are inside the opened array
        // by comparing its dataset value and id attribure



        const { openedCards } = this.state;


        console.log(openedCards[0]);

        if (openedCards.length === 2) {



            if (openedCards[0].dataset === openedCards[1].dataset && openedCards[0].id === openedCards[1].id) {
                console.log("they do match")

            } else {
                console.log("they do not match");

                setTimeout(this.removeNotMatched, 1000)

            }

        }




    }


    removeNotMatched = () => {

        const { openedCards } = this.state;



        openedCards[0].classList.remove('open');
        openedCards[0].children[0].classList.remove('open');
        openedCards[0].children[0].classList.add('hide-it');

        openedCards[1].classList.remove('open');
        openedCards[1].children[0].classList.remove('open');
        openedCards[1].children[0].classList.add('hide-it');

        this.setState({ openedCards: [] });




    }

    callOnClick = event => {

        this.displayCard(event);

    }




    render() {

        return (

            <div className="container">



                <ul id="deck" className="deck">
                    <li onClick={this.callOnClick} className="card" id="1" data-ball="ball0">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball0.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="2" data-ball="ball0">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball0.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="3" data-ball="ball1">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball1.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="4" data-ball="ball1">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball1.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="5" data-ball="ball2">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball2.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="6" data-ball="ball2">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball2.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="7" data-ball="ball3">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball3.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="8" data-ball="ball3">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball3.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="9" data-ball="ball4">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball4.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="10" data-ball="ball4">
                        <img className=" hide-it" src={require('./img/ball4.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="11" data-ball="ball5">
                        <img className="hide-it" src={require('./img/ball5.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="12" data-ball="ball5">
                        <img className="hide-it" src={require('./img/ball5.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="13" data-ball="ball6">
                        <img className=" hide-it" alt="pokeball icon" src={require('./img/ball6.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="14" data-ball="ball6">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball6.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="15" data-ball="ball7">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball7.png')} />
                    </li>
                    <li onClick={this.callOnClick} className="card" id="16" data-ball="ball7">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball7.png')} />
                    </li>
                </ul>
            </div>

        );

    }
}

export default GameBoard;


