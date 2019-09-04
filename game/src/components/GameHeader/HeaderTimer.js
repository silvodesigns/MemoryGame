import React from 'react';
import './GameHeader.css';

function HeaderTimer() {
    return (

        <div className="board-timer">
            <span id="hours">0</span>
            <span>:</span>
            <span id="minutes">0</span>
            <span>:</span>
            <span id="seconds">0</span>
        </div>

    );
}

export default HeaderTimer;