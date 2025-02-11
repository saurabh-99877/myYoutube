import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
  },
  reducers: {
    addchat: (state, action) => {
      if (state.chats.length >= 25) {
        state.chats.shift();
      }
      state.chats.push(action.payload);
    },
  },
});

export const { addchat } = chatSlice.actions;
export default chatSlice.reducer;
