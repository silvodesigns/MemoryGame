import React from 'react';
import './GameHeader.css';

function HeaderMoves(props) {

    return (
        <div className="board-moves">
            <span className="moves-number" id="moves">{props.counter}</span><span className="moves-p">moves</span>
        </div >

    );
}

export default HeaderMoves;