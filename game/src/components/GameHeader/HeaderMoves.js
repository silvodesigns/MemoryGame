import React from 'react';
import './GameHeader.css';

function HeaderMoves(props) {

    return (
        <div className="board-moves">
            <p><span id="moves">{props.counter}</span>Moves</p>
        </div >

    );
}

export default HeaderMoves;