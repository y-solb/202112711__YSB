import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardList: {},
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.cardList = action.payload;
    },
    addCard: (state, action) => {
      state.cardList.push(action.payload);
    },
    deleteCard: (state, action) => {
      state.cardList.splice(
        state.cardList.findIndex((card) => card.id === action.payload),
        1
      );
    },
  },
});

export const { setCard, addCard, deleteCard } = cardSlice.actions;
export const selectCardList = (state) => state.cards.cardList;

export default cardSlice.reducer;
