import { useEffect, useState } from "react";

const Notes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('https://67f3ed22cbef97f40d2cb280.mockapi.io/notes')
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

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