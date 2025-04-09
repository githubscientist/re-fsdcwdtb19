import { useLoaderData, useNavigate } from "react-router";
import instance from "../services/instance";

const Note = () => {

    const note = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = () => {
        let confirmDelete = confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            // make an api call to delete the note
            instance.delete(`/notes/${note.id}`)
                .then(response => {
                    // show an alert to the user that the note has been deleted
                    alert("Note deleted successfully");

                    // take the user to the home page or notes page
                    navigate('/');
                })
                .catch(error => {
                    alert("Error deleting note");
                })
        } else {

        }
    }

    const handleEdit = () => {
        navigate('/edit?id=' + note.id);
    }

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "start" }}>
                <div>
                    <button onClick={handleEdit}>Edit</button>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Note;