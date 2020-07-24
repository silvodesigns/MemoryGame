import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import GameBoard from './components/GameBoard/GameBoard.js';
import WelcomeScreen from './components/WelcomeScreen/welcome-screen.js';




import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/play" component={GameBoard} />
      </BrowserRouter>

    </div>
  );
}

export default App;
