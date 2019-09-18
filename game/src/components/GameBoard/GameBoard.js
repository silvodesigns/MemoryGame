import React from 'react';


import GameHeader from '../GameHeader/GameHeader.js';
import GameControls from '../GameControls/GameControls.js';

import './GameBoard.css';




class GameBoard extends React.Component {
    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)


        this.state = {
            openedCards: [],
            matchedCards: [],
            matches: 0,
            count: 0,
            time: 0,
            start: 0,
            timerActive: false


        }

    }


    startTimer = () => {

        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time
        })

        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start,
            timerActive: true
        }), 1)


    };

    stopTimer = () => {
        clearInterval(this.timer)
        this.setState({
            timerActive: false
        })


    }

    resetTimer = () => {
        clearInterval(this.timer)
        this.setState({
            time: 0,
            start: 0,
            count: 0,
            timerActive: false
        })

        this.resetFlippedCards();

    };

    resetFlippedCards = () => {

        const pokeBalls = document.getElementsByClassName('card');
        const balls = Array.from(pokeBalls);
        balls.forEach((ball) => {
            ball.classList.remove('match', 'open', 'ani');
            ball.classList.add('hide-it');
            ball.children[0].classList.add('hide-it');
        });



    }

    displayCard = event => {
        const pokeCard = event.target;

        //if the current pokeball I am clicking has not been opened yet
        // add the class 'open' to it and its child image
        // and reveal the Pokeball to the user by removing the class that hides it

        if (pokeCard.classList.contains('open') === false && this.state.openedCards.length < 2 && pokeCard.classList.contains('match') === false) {
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

        if (openedCards.length === 2) {

            if (openedCards[0].dataset.ball === openedCards[1].dataset.ball && openedCards[0].getAttribute('id') !== openedCards[1].getAttribute('id')) {
                console.log("they do match");
                setTimeout(this.yesMatch, 300)

            } else {
                console.log("they do not match");

                setTimeout(this.noMatch, 800)

            }

        }
    }


    noMatch = () => {

        //if the two pokeCards clicked do not match
        //remove the styling and hide them again
        //and empty the property of the state holding the openedCards


        const { openedCards } = this.state;

        openedCards[0].classList.remove('open');
        openedCards[0].children[0].classList.remove('open');
        openedCards[0].children[0].classList.add('hide-it');

        openedCards[1].classList.remove('open');
        openedCards[1].children[0].classList.remove('open');
        openedCards[1].children[0].classList.add('hide-it');

        this.setState({ openedCards: [] });


    }

    yesMatch = () => {

        //if the two pokeCards clicked do match
        //add the styles for matching cards and a little animation
        //and moved them out of the openedCards array to the matchedCards array of our state

        const { openedCards } = this.state;

        openedCards[0].classList.add('match', 'ani');
        openedCards[1].classList.add('match', 'ani');

        const openedCopy = this.state.openedCards;

        this.setState({
            matchedCards: [this.state.matchedCards.concat([openedCopy])],
            openedCards: [],
            matches: this.state.matches + 1
        })






    }

    incrementCounter = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }


    callOnClick = event => {

        if (event.target.tagName !== 'IMG' && this.state.timerActive !== false) {
            this.displayCard(event);
            this.incrementCounter()
        }


    }



    render() {



        return (
            <div>
                <GameHeader counter={this.state.count} timer={this.state.time} />

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
                            <img className=" hide-it" alt="pokeball icon" src={require('./img/ball4.png')} />
                        </li>
                        <li onClick={this.callOnClick} className="card" id="11" data-ball="ball5">
                            <img className="hide-it" alt="pokeball icon" src={require('./img/ball5.png')} />
                        </li>
                        <li onClick={this.callOnClick} className="card" id="12" data-ball="ball5">
                            <img className="hide-it" alt="pokeball icon" src={require('./img/ball5.png')} />
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


                <GameControls startTimer={this.startTimer} stopTimer={this.stopTimer} resetTimer={this.resetTimer} props={this.state} />
            </div>

        );

    }
}

export default GameBoard;


