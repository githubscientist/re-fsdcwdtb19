import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import noteServices from "../services/noteServices";
import { useDispatch, useSelector } from "react-redux";
import { selectDescription, selectTitle, setDescription, setTitle } from "../redux/features/updateNoteSlice";

const Edit = () => {

    const note = useLoaderData();

    const title = useSelector(selectTitle);
    const description = useSelector(selectDescription);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setTitle(note.title));
        dispatch(setDescription(note.description));
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
                        onChange={(e) => dispatch(setTitle(e.target.value))}
                    />
                </div>
                <br />
                <div>
                    <textarea
                        placeholder="Description"
                        rows={5}
                        cols={30}
                        value={description}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
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