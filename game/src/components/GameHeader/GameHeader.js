import React from 'react';
import HeaderTimer from './HeaderTimer.js';
import HeaderStars from './HeaderStars.js';
import HeaderMoves from './HeaderMoves.js';
import './GameHeader.css';

function GameHeader() {
    return (

        <div className="game-header">
            <HeaderTimer />
            <HeaderStars />
            <HeaderMoves />
        </div>

    );
}

export default GameHeader;