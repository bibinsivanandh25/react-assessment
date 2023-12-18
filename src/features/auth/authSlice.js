import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isAuthenticated = true;
    },
  },
});

//? redux selector
export const getData = (state) => state.auth.email;

export const { login } = authSlice.actions;

export default authSlice.reducer;
