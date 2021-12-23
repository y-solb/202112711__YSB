import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardList: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
