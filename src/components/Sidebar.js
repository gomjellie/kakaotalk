import React, { useState, useCallback } from 'react';

import bellImg from 'assets/bell.png';
import etcImg from 'assets/etc.png';
import settingImg from 'assets/setting.png';
import chatImg from 'assets/chat.png';
import userImg from 'assets/user.png';

import { useHistory } from 'react-router-dom';
import useConstructor from 'hooks/useConstructor';

export default function Sidebar() {
  const history = useHistory();
  const [selected, setSelected] = useState('/');

  useConstructor(() => {
    window?.api?.receive('fromMain', (data) => {
      console.log(data);
      const [command, tab] = data.split('/');
      if (command === 'switch') {
        pushFactory(tab)();
      }
    })
  })

  const pushFactory = useCallback((tab) => {
    return () => {
      setSelected(`/${tab}`);
      history.push(`/${tab}`);
    }
  }, [history]);

  return (
    <aside className="Sidebar">
      <img className={['/friend', '/'].includes(selected) ? "highlight" : ''} width="33%" id="personal" src={userImg} onClick={pushFactory('friend')} alt=""/>
      <img className={selected==='/chat' ? "highlight" : ''} width="33%" id="chat" src={chatImg} onClick={pushFactory('chat')} alt=""/>
      <img className={selected==='/more' ? "highlight" : ''} width="30%" id="etc" src={etcImg} onClick={pushFactory('more')} alt=""/>
      <img width="25%" id="bell" src={bellImg} alt=""/>
      <img width="25%" id="setting" src={settingImg} alt=""/>
    </aside>
  )
}
