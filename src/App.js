import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import GameBoard from './components/GameBoard/GameBoard.js';
import WelcomeScreen from './components/WelcomeScreen/welcome-screen.js';
import WinningScreen from './components/WinningScreen/winning-screen.js';




import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={WelcomeScreen} />
        <Route path="/play" component={GameBoard} />
        <Route path="/won" component={WinningScreen} />
      </Router>

    </div>
  );
}

export default App;
