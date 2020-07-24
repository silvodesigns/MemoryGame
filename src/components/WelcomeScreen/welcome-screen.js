import React from 'react';
import Button from "../buttons/button.js";
import Audio from "../GameControls/AudioControl.js";
import './welcomeScreen.css'


function WelcomeScreen() {
    return (
        <div className="welcome-screen">
            <div className="wrapper">
                <img className="wc-logo" src={require("./img/pklogo.png")} />
                <h1>MATCH THEM ALL</h1>
                <Button />
                <Audio />

            </div>
        </div>
    );
}

export default WelcomeScreen;
