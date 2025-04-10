import { createSlice } from "@reduxjs/toolkit";

export const newNoteSlice = createSlice({
    name: "newNote",
    initialState: {
        title: "",
        description: ""
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        }
    }
});

export const { setTitle, setDescription } = newNoteSlice.actions;

export const selectTitle = (state) => state.newNote.title;
export const selectDescription = (state) => state.newNote.description;

export default newNoteSlice.reducer;