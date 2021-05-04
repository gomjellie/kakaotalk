import React from 'react';
import bieberImg from '../../assets/bieber.jpg';

export default function UserItem({nickname, avatar, stat, music}) {
  return (
    <div className="UserItem">
      <img className="Avatar" src={avatar || bieberImg} alt="" />
      <div className="Infos">
        <div className="LeftInfo">
          {nickname && <div className="NickName">{ nickname }</div>}
          {stat && <div className="StatMessage">{ stat }</div> }
        </div>
        
        {music && <div className="RightInfo">
          <div className="Music">{ music }</div>
        </div>}
      </div>
    </div>
  )
}
