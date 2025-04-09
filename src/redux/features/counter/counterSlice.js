import { createSlice } from "@reduxjs/toolkit";

// create a new slice
export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        }
    }
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;