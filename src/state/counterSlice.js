import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0,
  status: 'idle',
};

// Reducer & action are properties of counterSlice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  }
});

// actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
