import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import defaultAvatarImg from '../../assets/defaultProfile.png';
import TimeView from '../../components/TimeView';

export default function ChatItem({avatar, title, message, currentTime, numUnread}) {

  const messageFilter = useCallback((msg) => {
    if (msg === undefined) return undefined;
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
        <TimeView
          className="CurrentTime"
          datetime={ currentTime || '2021-5-4 08:00:00'}
        />
        <div className="NumUnread">
          { numUnread || "" }
        </div>
      </div>
    </div>
  )
}

ChatItem.propTypes = {
  avatar: PropTypes.any,
  title: PropTypes.string,
  message: PropTypes.string,
  currentTime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  numUnread: PropTypes.number,
};
