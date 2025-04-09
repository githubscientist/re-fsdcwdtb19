import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

// create a new store
const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export default store;