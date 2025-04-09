import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

const Edit = () => {

    const note = useLoaderData();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setTitle(note.title);
        setDescription(note.description);
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();

        // make an api call to update the note
        fetch(`https://67f3ed22cbef97f40d2cb280.mockapi.io/notes/${note.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description
            })
        })
            .then(response => {
                alert("Note updated successfully");

                navigate(-1);
            })
            .catch(error => {
                alert("Error updating note");
            })
    }

    return (
        <div>
            <h1>Update Note</h1>
            <form onSubmit={handleUpdate}>
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <textarea
                        placeholder="Description"
                        rows={5}
                        cols={30}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <br />

                <div>
                    <input type="submit" value='Update' />
                </div>
            </form>
        </div>
    )
}

export default Edit;