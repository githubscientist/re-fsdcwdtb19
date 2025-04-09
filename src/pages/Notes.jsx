import { useEffect } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const Notes = () => {

    const notes = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        // runs when the component renders
        // and whenever the state notes changes
        console.log(notes);
    }, [notes]);

    const handleAddNote = () => {
        navigate('/new');
    }

    return (
        <div>
            <h1>Notes</h1>

            <ul>
                {
                    notes
                        .map((note) => {
                            return <li key={note.id}><Link to={`/note?id=${note.id}`}>{note.title}</Link></li>
                        })
                }
            </ul>

            <div>
                <button onClick={handleAddNote}>New Note</button>
            </div>
        </div>
    )
}

export default Notes;