// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Matching Game</title>
//     <meta name="description" content="" />
//     <link
//       rel="stylesheet prefetch"
//       href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"
//     />
//     <link
//       rel="stylesheet prefetch"
//       href="https://fonts.googleapis.com/css?family=Coda"
//     />
//     <link rel="stylesheet" href="css/app.css" />
//   </head>

import React from 'react';
import './GameBoard.css';


function GameBoard() {
    return (

        <div class="container">
            {/* <audio id="theme" autoplay loop>
        <source src="audio/theme.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}

            {/* <section class="score-panel">
                <ul id="stars" class="stars">
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                    <li><i class="fa fa-star"></i></li>
                </ul>
                <span id="moves">0</span> Moves
        <div id="reset" class="restart">
                    <i class="fa fa-repeat"></i>
                </div>
              
            </section> */}
            <ul id="deck" class="deck">
                <li class="card" id="1" data-ball="ball0">
                    <img class="hide-it" src={require('./img/ball0.png')} />
                </li>
                <li class="card" id="2" data-ball="ball0">
                    <img class="hide-it" src={require('./img/ball0.png')} />
                </li>
                <li class="card" id="3" data-ball="ball1">
                    <img class="hide-it" src={require('./img/ball1.png')} />
                </li>
                <li class="card" id="4" data-ball="ball1">
                    <img class="hide-it" src={require('./img/ball1.png')} />
                </li>
                <li class="card" id="5" data-ball="ball2">
                    <img class="hide-it" src={require('./img/ball2.png')} />
                </li>
                <li class="card" id="6" data-ball="ball2">
                    <img class="hide-it" src={require('./img/ball2.png')} />
                </li>
                <li class="card" id="7" data-ball="ball3">
                    <img class="hide-it" src={require('./img/ball3.png')} />
                </li>
                <li class="card" id="8" data-ball="ball3">
                    <img class="hide-it" src={require('./img/ball3.png')} />
                </li>
                <li class="card" id="9" data-ball="ball4">
                    <img class="hide-it" src={require('./img/ball4.png')} />
                </li>
                <li class="card" id="10" data-ball="ball4">
                    <img class=" hide-it" src={require('./img/ball4.png')} />
                </li>
                <li class="card" id="11" data-ball="ball5">
                    <img class="hide-it" src={require('./img/ball5.png')} />
                </li>
                <li class="card" id="12" data-ball="ball5">
                    <img class="hide-it" src={require('./img/ball5.png')} />
                </li>
                <li class="card" id="13" data-ball="ball6">
                    <img class=" hide-it" src={require('./img/ball6.png')} />
                </li>
                <li class="card" id="14" data-ball="ball6">
                    <img class="hide-it" src={require('./img/ball6.png')} />
                </li>
                <li class="card" id="15" data-ball="ball7">
                    <img class="hide-it" src={require('./img/ball7.png')} />
                </li>
                <li class="card" id="16" data-ball="ball7">
                    <img class="hide-it" src={require('./img/ball7.png')} />
                </li>
            </ul>
        </div>

    );
}

export default GameBoard;


