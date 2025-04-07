import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export const notesLoader = async () => {
    const response = await fetch('https://67f3ed22cbef97f40d2cb280.mockapi.io/notes')
    const data = await response.json();
    return data;
}

const Notes = () => {

    const notes = useLoaderData();

    useEffect(() => {
        // runs when the component renders
        // and whenever the state notes changes
        console.log(notes);
    }, [notes]);

    return (
        <div>
            <h1>Notes</h1>

            <ul>
                {
                    notes
                        .map((note) => {
                            return <li key={note.id}>{note.title}</li>
                        })
                }
            </ul>
        </div>
    )
}

export default Notes;