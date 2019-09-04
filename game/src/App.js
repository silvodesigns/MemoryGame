import React from 'react';
import GameBoard from './components/GameBoard/GameBoard.js';
import GameHeader from './components/GameHeader/GameHeader.js';
import GameControls from './components/GameControls/GameControls.js';

import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <GameHeader />
      <GameBoard />
      <GameControls />
    </div>
  );
}

export default App;
