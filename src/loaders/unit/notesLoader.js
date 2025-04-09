import noteServices from "../../services/noteServices";

const notesLoader = async () => {
    const response = await noteServices.getAllNotes();
    return response.data;
}

export default notesLoader;