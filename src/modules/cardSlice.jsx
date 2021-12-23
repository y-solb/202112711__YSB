import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardList: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cardList.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
