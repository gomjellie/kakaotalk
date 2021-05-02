import React from 'react';
import './styles/style.css';
import bellImg from './assets/bell.png';
import etcImg from './assets/etc.png';
import settingImg from './assets/setting.png';
import chatImg from './assets/chat.png';
import userImg from './assets/user.png';

import Friend from './features/friend/Friend';

function App() {
  return (
    <div className="App">
      <aside className="Sidebar">
        <img class="highlight" width="33%" id="personal" src={userImg} alt=""/>
        <img width="33%" id="chat" src={chatImg} alt=""/>
        <img width="30%" id="etc" src={etcImg} alt=""/>
        <img width="25%" id="bell" src={bellImg} alt=""/>
        <img width="25%" id="setting" src={settingImg} alt=""/>
      </aside>
      <Friend />      
    </div>
  );
}

export default App;
