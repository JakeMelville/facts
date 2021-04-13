import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Scoreboard from './pages/Scoreboard.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Scoreboard} />
      </div>
    </Router>
  );
}

export default App;
