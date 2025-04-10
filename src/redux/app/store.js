import { configureStore } from "@reduxjs/toolkit";
import newNoteReducer from "../features/newNoteSlice";

const store = configureStore({
    reducer: {
        newNote: newNoteReducer,
    }
});

export default store;