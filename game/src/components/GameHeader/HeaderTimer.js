import React from 'react';
import './GameHeader.css';

function HeaderTimer(props) {
    return (

        <div className="board-timer">
            {props.timer}
        </div>

    );
}

export default HeaderTimer;