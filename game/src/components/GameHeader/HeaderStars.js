import React from 'react';
import './GameHeader.css';

function HeaderStars() {
    return (

        <div className="board-stars">
            <img className="stars" src={require('./img/star-filled.svg')} />
            <img className="stars" src={require('./img/star-filled.svg')} />
            <img className="stars" src={require('./img/star.svg')} />
        </div>

    );
}

export default HeaderStars;