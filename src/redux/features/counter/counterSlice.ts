import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const couterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decremnet: (state) => {
      state.count -= 1;
    },
  },
});
