import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import defaultAvatarImg from '../../assets/defaultProfile.png';


export default function ChatItem({avatar, title, message, currentTime, numUnread}) {

  const messageFilter = useCallback((msg) => {
    if (msg === undefined) return undefined;
    console.log(msg);
    console.log(msg?.replaceAll("\\n", '\u000A'));
    return msg?.replaceAll('\\n', '\u000A');
  }, []);

  return (
    <div className="ChatItem">
      <div className="AvatarWarpper">
        <img className="Avatar" src={avatar || defaultAvatarImg} alt="" />
      </div>
      <div className="Left">
        <div className="Title">
          { title || "title" }
        </div>
        <pre className="Message">
          { messageFilter(message) || "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " }
        </pre>
      </div>
      <div className="Right">
        <div className="Time">
          { currentTime || "9:04 PM" }
        </div>
        <div className="NumUnread">
          { numUnread || "300" }
        </div>
      </div>
    </div>
  )
}

ChatItem.propTypes = {
  avatar: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string,
  currentTime: PropTypes.string,
  numUnread: PropTypes.number,
};
