import React from 'react';
import HeaderTimer from './HeaderTimer.js';
import HeaderStars from './HeaderStars.js';
import HeaderMoves from './HeaderMoves.js';
import './GameHeader.css';

const GameHeader = props => {

    return (

        <div className="game-header">
            <HeaderTimer timer={props.timer} />
            <HeaderStars counter={props.counter} />
            <HeaderMoves counter={props.counter} />
        </div>

    );
}

export default GameHeader;