import React from 'react';
import './audio-control.css'

const Audio = props => {

    return (

        <div className="audio-control">
            <audio autoPlay="autoplay" loop="loop">
                <source src={require('../../audio/theme.mp3')} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>

    );
}

export default Audio;



