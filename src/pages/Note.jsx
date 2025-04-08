import { useLoaderData } from "react-router";

const Note = () => {

    const note = useLoaderData();

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
        </div>
    )
}

export default Note;