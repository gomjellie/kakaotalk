import React from 'react';
import PropTypes from "prop-types";
import defaultProfileImg from 'assets/defaultProfile.png';

export default function UserItem({user, onClick}) {
  const {nickname, avatar, stat, music} = user;
  return (
    <div className={`UserItem ${user.selected ? 'Selected' : ''}`} onClick={onClick}>
      <img className="Avatar" src={avatar || defaultProfileImg} alt="" />
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

UserItem.propTypes = {
  user: PropTypes.object,
  onClick: PropTypes.func,
};

UserItem.defaultProps = {
  user: {},
  onClick: () => {},
};
