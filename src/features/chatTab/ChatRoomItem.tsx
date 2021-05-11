import React, { useCallback } from "react";
import { Room } from './chatRoomsSlice';
import defaultAvatarImg from "assets/defaultProfile.png";
import TimeView from "./TimeView";

const Badge: React.FC<{ numUnread: number }> = ({ numUnread }) => {
  return <div className="Badge">{numUnread}</div>;
};

const ChatRoomItem: React.FC<{ chatRoom: Room; onClick: () => void }> = ({
  chatRoom,
  onClick,
}) => {
  const { avatar, title, message, currentTime, numUnread, selected } =
    chatRoom || {};

  const messageFilter = useCallback((msg) => {
    if (msg === undefined) return undefined;
    return msg?.replaceAll("\\n", "\u000A");
  }, []);

  return (
    <div
      className={`ChatRoomItem ${selected ? "Selected" : ""}`}
      onClick={onClick || (() => {})}
    >
      <div className="AvatarWarpper">
        <img className="Avatar" src={avatar || defaultAvatarImg} alt="" />
      </div>
      <div className="Left">
        <div className="Title">{title || "Chat Room Title"}</div>
        <pre className="Message">
          {messageFilter(message) || "No Current Message"}
        </pre>
      </div>
      <div className="Right">
        <TimeView datetime={currentTime || "2021-5-4 08:00:00"} />
        <div className="NumUnread">
          {numUnread && <Badge numUnread={numUnread} />}
        </div>
      </div>
    </div>
  );
};

export default ChatRoomItem;
