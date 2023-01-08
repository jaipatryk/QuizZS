import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./reducers/session";
import { createWrapper } from "next-redux-wrapper";

// TODO: Zrobić coś żeby ssr działało

export const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
