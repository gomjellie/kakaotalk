import React from 'react';
import chatImg from '../../assets/chat.png';

export default function ChannelItem({numChannel}) {
  return (
    <div className="ChannelItem">
      <div className="AvatarWrapper">
        <div className="CH">Ch</div>
        <img className="Avatar" src={chatImg} alt=""></img>
      </div>
      
      <div className="Texts">Channel <div className="NumChannel">{numChannel}</div></div>
    </div>
  )
}
