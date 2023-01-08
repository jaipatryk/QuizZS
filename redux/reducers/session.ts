import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface SessionState {
  session: boolean;
}

const initialState: SessionState = {
  session: Cookies.get("session") === "true" ? true : false,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<boolean>) => {
      state.session = action.payload;
    },
  },
});

// export const { setSession } = sessionSlice.actions;

export const { setSession } = sessionSlice.actions;

export default sessionSlice.reducer;
