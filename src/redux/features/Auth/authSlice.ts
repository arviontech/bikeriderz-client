import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  _id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions; //This line exports the setUser and logOut actions, allowing you to dispatch these actions from components or other parts of the application.
export default authSlice.reducer; //This reducer handles state updates for the auth slice and will be added to the Redux store.

export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
