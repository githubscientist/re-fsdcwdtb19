import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import instance from "../services/instance";
import noteServices from "../services/noteServices";

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
        noteServices.updateNote(note.id, { title, description })
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