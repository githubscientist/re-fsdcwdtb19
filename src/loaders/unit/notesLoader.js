import instance from "../../services/instance";

const notesLoader = async () => {
    const response = await instance.get('/notes');
    return response.data;
}

export default notesLoader;