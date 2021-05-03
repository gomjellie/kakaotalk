import React from 'react';
import './styles/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Friend from './features/friend/Friend';
import Chat from './features/chat/Chat';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Friend} />
          <Route exact path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
