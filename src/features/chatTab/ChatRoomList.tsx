import React from "react";
import ChatRoomItem from "./ChatRoomItem";
import { useDispatch, useSelector } from "react-redux";
import { selectChatRooms, onClickRoom } from "./chatRoomsSlice";

export default function ChatRoomList() {
  const chatRooms = useSelector(selectChatRooms);
  const dispatch = useDispatch();

  return (
    <div className="ChatRoomList">
      {chatRooms.map((chatRoom) => {
        return (
          <ChatRoomItem
            key={chatRoom.title}
            chatRoom={chatRoom}
            onClick={() => {
              dispatch(onClickRoom({ title: chatRoom.title }));
            }}
          />
        );
      })}
    </div>
  );
}
