import React from 'react';
import './styles/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Sidebar from './components/Sidebar';
import FriendTab from './features/friendTab/FriendTab';
import ChatTab from './features/chatTab/ChatTab';
import MoreTab from './features/moreTab/MoreTab';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={FriendTab} />
          <Route exact path="/friend" component={FriendTab} />
          <Route exact path="/chat" component={ChatTab} />
          <Route exact path="/more" component={MoreTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
