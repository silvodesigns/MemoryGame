import React from 'react';
import './GameControls.css';

function GameControls() {
    return (

        <div className="game-controls">
            <div className="start">START</div>
            <div className="pause">PAUSE</div>
            <div className="reset">RESET</div>
            <audio controls="controls">
                <source src={require('../../audio/theme.mp3')} type="audio/mp3" />
                Your browser does not support the audio element.
           </audio>



        </div>

    );
}

export default GameControls;