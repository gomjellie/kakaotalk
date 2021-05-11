import { createSlice } from "@reduxjs/toolkit";

import chanoImg from "assets/chano.png";
import duhanImg from "assets/duhan.jpeg";
import umImg from "assets/um.jpeg";
import pakaImg from "assets/paka.jpeg";
import jihwanImg from "assets/jihwan.jpeg";

const initialState = {
  users: [
    {
      avatar: chanoImg,
      nickname: "랄로",
      stat: "그렇게 됐습니다...",
      music: "おおつか あい-さくらんぼ",
    },
    {
      avatar: duhanImg,
      nickname: "김두한",
      stat: "4 딸라!",
    },
    {
      nickname: "정상길",
    },
    {
      nickname: "장지환",
      stat: "ㅅㅍㅌㄴㄲ",
      avatar: jihwanImg,
      music: "Panic! At The Disco - I Write Sins Not Tragedies",
    },
    {
      nickname: "손인욱",
      avatar: pakaImg,
      music: "",
    },
    {
      nickname: "엄준식",
      avatar: umImg,
      stat:
        "Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum",
    },
    {
      nickname: "굄우지",
    },
    {
      nickname: ".",
      stat: "asdf",
    },
    {
      nickname: "페페",
      music: "Fear and Loathing in the lasvegas - Jump Around",
    },

  ],
  status: "idle",
};

const friendTabSlice = createSlice({
  name: "friendTab",
  initialState,
  reducers: {
    onClickUser(state, action) {
      const prevSelected = state.users.find((room) => {
        return room.selected === true;
      });

      const currSelected = state.users.find((room) => {
        return room.nickname === action.payload.nickname;
      });

      if (prevSelected === currSelected) {
        // 더블클릭
        window?.api?.send?.("toMain", { title: currSelected.nickname });
        currSelected.selected = false;
      } else {
        if (prevSelected) prevSelected.selected = false;
        currSelected.selected = true;
      }
    },
  },
});

export default friendTabSlice.reducer;

export const selectUsers = (state) => state.friendTab.users;

export const { onClickUser } = friendTabSlice.actions;
