import React from 'react';
import ChannelIcon from '../../assets/channel.png';

export default function ChannelItem({numChannel}) {
  return (
    <div className="ChannelItem">
      <img className="Avatar" src={ChannelIcon} alt="" />
      
      <div className="Texts">Channel <div className="NumChannel">{numChannel}</div></div>
    </div>
  )
}
