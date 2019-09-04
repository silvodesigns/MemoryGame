import React from 'react';
import './GameBoard.css';


class GameBoard extends React.Component {



    displayCard = event => {
        if (event.target.classList.contains('open') === false) {
            event.target.classList.add('open');
            event.target.children[0].classList.remove("hide-it");
            event.target.children[0].classList.add("open");

        }


    }




    render() {

        return (

            <div className="container">



                <ul id="deck" className="deck">
                    <li onClick={this.displayCard} className="card" id="1" data-ball="ball0">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball0.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="2" data-ball="ball0">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball0.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="3" data-ball="ball1">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball1.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="4" data-ball="ball1">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball1.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="5" data-ball="ball2">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball2.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="6" data-ball="ball2">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball2.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="7" data-ball="ball3">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball3.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="8" data-ball="ball3">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball3.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="9" data-ball="ball4">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball4.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="10" data-ball="ball4">
                        <img className=" hide-it" src={require('./img/ball4.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="11" data-ball="ball5">
                        <img className="hide-it" src={require('./img/ball5.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="12" data-ball="ball5">
                        <img className="hide-it" src={require('./img/ball5.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="13" data-ball="ball6">
                        <img className=" hide-it" alt="pokeball icon" src={require('./img/ball6.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="14" data-ball="ball6">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball6.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="15" data-ball="ball7">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball7.png')} />
                    </li>
                    <li onClick={this.displayCard} className="card" id="16" data-ball="ball7">
                        <img className="hide-it" alt="pokeball icon" src={require('./img/ball7.png')} />
                    </li>
                </ul>
            </div>

        );

    }
}

export default GameBoard;


