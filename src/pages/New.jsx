import { useNavigate } from "react-router";
import noteServices from "../services/noteServices";
import { useDispatch, useSelector } from "react-redux";
import { selectDescription, selectTitle, setDescription, setTitle } from "../redux/features/newNoteSlice";

const New = () => {

    const navigate = useNavigate();
    const title = useSelector(selectTitle);
    const description = useSelector(selectDescription);

    const dispatch = useDispatch();

    const handleCreate = (e) => {
        e.preventDefault();

        // make an api call to create a note
        noteServices.createNote({ title, description })
            .then((response) => {
                alert('Note Created Successfully');

                // clear the form
                dispatch(setTitle(''));
                dispatch(setDescription(''));

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
                    <input type="submit" value='Create' />
                </div>
            </form>
        </div>
    )
}

export default New;