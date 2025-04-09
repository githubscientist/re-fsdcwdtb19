import { useState } from "react";
import { useNavigate } from "react-router";
import instance from "../services/instance";
import noteServices from "../services/noteServices";

const New = () => {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();

        // make an api call to create a note
        noteServices.createNote({ title, description })
            .then((response) => {
                alert('Note Created Successfully');

                // clear the form
                setTitle("");
                setDescription("");

                // take the user to the home page or notes page
                navigate('/');

            })
            .catch((error) => {
                alert("Error creating note");
            })
    }

    return (
        <div>
            <h1>New Note</h1>

            <form onSubmit={handleCreate}>
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
                    <input type="submit" value='Create' />
                </div>
            </form>
        </div>
    )
}

export default New;