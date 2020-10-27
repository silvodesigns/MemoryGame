import React from 'react';
import './GameHeader.css';


const ms = require('pretty-ms');

class HeaderTimer extends React.Component {
    constructor(props) {
        super(props);
    }

    convertMS = (ms) => {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return (seconds == 60 ? (minutes + 1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);

    }

    render() {
        const readTime = this.convertMS(this.props.timer)
        return (

            <div className="board-timer" >
                <span className="timer-count">{readTime}</span>
            </div>

        )
    }
}

export default HeaderTimer;