import { createSlice } from "@reduxjs/toolkit";

// create a new slice
export const updateNoteSlice = createSlice({
    name: "updateNote",
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

export const { setTitle, setDescription } = updateNoteSlice.actions;

export const selectTitle = (state) => state.updateNote.title;
export const selectDescription = (state) => state.updateNote.description;

export default updateNoteSlice.reducer;