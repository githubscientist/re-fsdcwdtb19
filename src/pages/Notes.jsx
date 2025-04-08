import { useEffect } from "react";
import { useLoaderData } from "react-router";

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