import React, { useCallback } from "react";
import PropTypes from "prop-types";
import defaultAvatarImg from "assets/defaultProfile.png";
import TimeView from "components/TimeView";

function Badge({ num }) {
  return <div className="Badge">{num}</div>;
}
export default function ChatRoomItem({
  chatRoom,
  onClick,
}) {
  const { avatar, title, message, currentTime, numUnread, selected } = chatRoom;

  const messageFilter = useCallback((msg) => {
    if (msg === undefined) return undefined;
    return msg?.replaceAll("\\n", "\u000A");
  }, []);

  return (
    <div
      className={`ChatRoomItem ${selected ? "Selected" : ""}`}
      onClick={onClick}
    >
      <div className="AvatarWarpper">
        <img className="Avatar" src={avatar || defaultAvatarImg} alt="" />
      </div>
      <div className="Left">
        <div className="Title">{title || "Chat Room Title"}</div>
        <pre className="Message">
          {messageFilter(message) ||
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "}
        </pre>
      </div>
      <div className="Right">
        <TimeView
          className="CurrentTime"
          datetime={currentTime || "2021-5-4 08:00:00"}
        />
        <div className="NumUnread">
          {numUnread && <Badge num={numUnread} />}
        </div>
      </div>
    </div>
  );
}

ChatRoomItem.propTypes = {
  chatRoom: PropTypes.object,
  onClick: PropTypes.func,
};

ChatRoomItem.defaultProps = {
  chatRoom: {},
  onClick: () => {},
};
