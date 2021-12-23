import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../modules/cardSlice";

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
