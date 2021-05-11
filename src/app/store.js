import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import chatRoomReducer from 'features/chatTab/chatRoomsSlice';
import friendTabReducer from 'features/friendTab/friendTabSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chatRooms: chatRoomReducer,
    friendTab: friendTabReducer,
  },
});
