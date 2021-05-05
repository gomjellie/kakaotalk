import React from 'react';
import ChannelIcon from '../../assets/channel.png';

export default function ChannelItem({icon, name, numItem}) {
  return (
    <div className="ChannelItem">
      <img className="Avatar" src={icon || ChannelIcon} alt="" />
      
      <div className="Texts">
        {name}
        <div className="NumChannel">{numItem}</div>
      </div>
    </div>
  )
}
