import { configureStore } from "@reduxjs/toolkit";
import newNoteReducer from "../features/newNoteSlice";
import updateNoteReducer from "../features/updateNoteSlice";

const store = configureStore({
    reducer: {
        newNote: newNoteReducer,
        updateNote: updateNoteReducer,
    }
});

export default store;