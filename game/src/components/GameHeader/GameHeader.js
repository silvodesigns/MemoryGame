import React from 'react';
import HeaderTimer from './HeaderTimer.js';
import HeaderStars from './HeaderStars.js';
import HeaderMoves from './HeaderMoves.js';
import './GameHeader.css';

const GameHeader = props => {

    console.log(props, "from GameHeader");

    return (

        <div className="game-header">
            <HeaderTimer timer={props.timer} />
            <HeaderStars />
            <HeaderMoves counter={props.counter} />
        </div>

    );
}

export default GameHeader;