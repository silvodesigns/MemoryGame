import React from 'react';
import './GameHeader.css';




class HeaderStars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let perfect_rating = (this.props.counter <= 16) ? <div className="board-stars" >
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
        </div> : null;


        let medium_rating = (this.props.counter >= 17 && this.props.counter <= 30) ? <div className="board-stars" >
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star.svg')} />
        </div> : null;


        let low_rating = (this.props.counter > 30) ? <div className="board-stars" >
            <img className="stars" alt="star icon" src={require('./img/star-filled.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star.svg')} />
            <img className="stars" alt="star icon" src={require('./img/star.svg')} />
        </div> : null;




        return (

            <div>
                {perfect_rating}
                {medium_rating}
                {low_rating}

            </div>
        )
    }
}

export default HeaderStars;