import { createSlice } from "@reduxjs/toolkit";

import duhanJpeg from "assets/duhan.jpeg";
import kakaoPayImg from "assets/kakaopay.png";
import raloImg from "assets/ralo.png";
import pepeGif from "assets/pepe.gif";

const initialState = {
  rooms: [
    {
      title: "김두한",
      avatar: duhanJpeg,
      message: "4 딸라...!",
      currentTime: "2021-5-4 12:52:00",
      numUnread: 28,
    },
    {
      title: "[공고3]SW 개발자 취업&이직 공고방",
      message:
        "안녕하세요! :D\n 공지사항 필독 부탁드립니다!\n\n #공지사항 미준수 시 강퇴 #",
      currentTime: "2021-5-4 09:15:00",
      numUnread: 115,
    },
    {
      title: "카카오페이",
      avatar: kakaoPayImg,
      message:
        "[결제] 알 리워드가 도착했습니다.\n\n도착한 결제 알 리워드는 아래 [받기] 버튼을 누르시면",
      currentTime: "2021-5-3 08:00:00",
    },
    {
      title: "호찬김",
      avatar: raloImg,
      message:
        "그러니까 내가..\n누군가를 이제 좋아한다 사실이\n그 사람에게는 상처가 될 수도 있잖아요..",
      currentTime: "2021-5-1 08:00:00",
    },
    {
      title: "페페",
      avatar: pepeGif,
      message: "Photo",
      currentTime: "2021-4-4 23:00:00",
    },
  ],
  status: "idle",
};

const chatRoomsSlice = createSlice({
  name: "chatRooms",
  initialState,
  reducers: {
    onClickRoom(state, action) {
      const prevSelectedRoom = state.rooms.find((room) => {
        return room.selected === true;
      });

      const clickedRoom = state.rooms.find((room) => {
        return room.title === action.payload.title;
      });

      if (prevSelectedRoom === clickedRoom) {
        // 더블클릭
        window?.api?.send?.("toMain", { title: clickedRoom.title });
        clickedRoom.selected = false;
      } else {
        if (prevSelectedRoom) prevSelectedRoom.selected = false;
        clickedRoom.selected = true;
      }
    },
  },
});

export default chatRoomsSlice.reducer;

export const selectChatRooms = (state) => state.chatRooms.rooms;

export const { onClickRoom } = chatRoomsSlice.actions;
