import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    show: false,
  },
  reducers: {
    toggleMenu: (state) => {
        state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    showMore: (state) => {
      state.show = !state.show;
    },
    resetShowMore: (state) => {
      state.show = false;
    }
  }
});

export const { toggleMenu, closeMenu, showMore, resetShowMore } = appSlice.actions;

export default appSlice.reducer;