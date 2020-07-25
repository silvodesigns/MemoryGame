import React from 'react';
import './button.css';

const PlayButton = props => {

    return (
        <a href="play">
            <div className="play-button">
                <p>PLAY NOW</p>
            </div>
        </a>
    );
}

export default PlayButton;