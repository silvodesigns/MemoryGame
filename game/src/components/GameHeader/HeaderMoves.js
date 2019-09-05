import React from 'react';
import './GameHeader.css';

function HeaderMoves(props) {

    console.log(props, "from moves");
    return (

        <div className="board-moves">
            <p><span id="moves">{props.counter}</span>Moves</p>
        </div >

    );
}

export default HeaderMoves;