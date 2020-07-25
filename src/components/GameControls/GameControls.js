import React from 'react';
import './GameControls.css';

class GameControls extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {



        let start = (this.props.props.time === 0) ? <div className="start" onClick={this.props.startTimer} >START</div> : null;
        let pause = (this.props.props.timerActive === true) ? <div className="pause" onClick={this.props.stopTimer}>PAUSE</div> : null;
        let reset = (this.props.props.timerActive === true && this.props.props.time !== 0) ? <div className="reset" onClick={this.props.resetTimer} >RESET</div> : null;
        let resume = (this.props.props.time != 0 && !this.props.props.timerActive) ? <div className="start" onClick={this.props.startTimer}>RESUME</div> : null;


        return (
            <div className="game-controls" >

                {start}
                {pause}
                {reset}
                {resume}
                {/* <audio controls="controls" autoPlay="autoplay" loop="loop">
                    <source src={require('../../audio/theme.mp3')} type="audio/mp3" />
                    Your browser does not support the audio element. */}
                {/* </audio> */}



            </div >


        )
    }
}

export default GameControls;