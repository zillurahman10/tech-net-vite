import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
  count: number;
}

const initialState: CounterSlice = {
  count: 0,
};

const couterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decremnet: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decremnet, incrementByAmount } = couterSlice.actions;

export default couterSlice.reducer;
