import React from 'react';
import './GameControls.css';

class GameControls extends React.Component {


    startTimer = () => {
        console.log("start the timer")

    };
    stopTimer = () => {
        console.log("stop the timer")

    }
    resetTimer = () => {
        console.log("reset the timer")

    };



    render() {

        return (



            <div className="game-controls" >
                <div className="start" onClick={this.startTimer}>START</div>
                <div className="pause" onClick={this.stopTimer}>PAUSE</div>
                <div className="reset" onClick={this.resetTimer}>RESET</div>
                <audio controls="controls">
                    <source src={require('../../audio/theme.mp3')} type="audio/mp3" />
                    Your browser does not support the audio element.
           </audio>



            </div>


        )
    }
}

export default GameControls;