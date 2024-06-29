import { configureStore } from "@reduxjs/toolkit";
import themeReducer, { ThemeState } from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = {
  theme: ThemeState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
