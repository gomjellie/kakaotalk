import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import chatRoomReducer from 'features/chatTab/chatRoomsSlice';
import friendTabReducer from 'features/friendTab/friendTabSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    chatRooms: chatRoomReducer,
    friendTab: friendTabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export { store };
