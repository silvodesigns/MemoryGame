import React from 'react';
import './GameHeader.css';


const ms = require('pretty-ms');

class HeaderTimer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const readTime = ms(this.props.timer);
        return (

            <div className="board-timer" >
                {readTime}
            </div>

        )
    }
}

export default HeaderTimer;