import React, { useState } from 'react';

import bellImg from '../assets/bell.png';
import etcImg from '../assets/etc.png';
import settingImg from '../assets/setting.png';
import chatImg from '../assets/chat.png';
import userImg from '../assets/user.png';

import { useHistory } from 'react-router-dom';

export default function Sidebar() {
  const history = useHistory();
  const [selected, setSelected] = useState('/');

  const pushFriend = () => {
    setSelected('/');
    history.push('/');
  }

  const pushChat = () => {
    setSelected('/chat');
    history.push('/chat');
  }

  const pushEtc = () => {
    setSelected('/etc');
    history.push('/etc');
  }
  
  return (
    <aside className="Sidebar">
      <img className={selected==='/' ? "highlight" : ''} width="33%" id="personal" src={userImg} onClick={pushFriend} alt=""/>
      <img className={selected==='/chat' ? "highlight" : ''} width="33%" id="chat" src={chatImg} onClick={pushChat} alt=""/>
      <img className={selected==='/etc' ? "highlight" : ''} width="30%" id="etc" src={etcImg} onClick={pushEtc} alt=""/>
      <img width="25%" id="bell" src={bellImg} alt=""/>
      <img width="25%" id="setting" src={settingImg} alt=""/>
    </aside>
  )
}
