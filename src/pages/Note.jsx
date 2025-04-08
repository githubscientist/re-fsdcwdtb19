import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Note = () => {

    const [note, setNote] = useState({});

    // read the params id from the URL
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://67f3ed22cbef97f40d2cb280.mockapi.io/notes/${id}`)
            .then(response => response.json())
            .then(data => setNote(data));
    }, []);

    console.log(note);

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
        </div>
    )
}

export default Note;