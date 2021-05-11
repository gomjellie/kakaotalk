import React from "react";
import "./styles/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Switcher from "./components/Switcher";
import FriendTab from "./features/friendTab/FriendTab";
import ChatTab from "./features/chatTab/ChatTab";
import MoreTab from "./features/moreTab/MoreTab";
import ChatRoom from "./features/chatRoom/chatRoom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switcher />
        <Switch>
          <Route exact path="/chatRoom/:id" component={ChatRoom} />
          <Route exact path="/friend" component={FriendTab} />
          <Route exact path="/chat" component={ChatTab} />
          <Route exact path="/more" component={MoreTab} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
