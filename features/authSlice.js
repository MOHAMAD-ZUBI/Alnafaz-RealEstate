import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const checkIfAuth = createAsyncThunk(
  "isAuth/checkIfAuth",
  async (payload, thunkApi) => {
    const response = await fetch("http://localhost:3000/api/getCookie");
    const data = await response.json();
    if (data?.responseJSON === "success") {
      return true;
    } else {
      return false;
    }
  }
);

export const authSlice = createSlice({
  name: "isAuth",
  initialState: {
    isAuth: null,
  },
  reducers: {
    checkAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkIfAuth.fulfilled, (state, action) => {
      state.isAuth = action.payload;
    });
  },
});

export const { checkAuth } = authSlice.actions;

export default authSlice.reducer;
