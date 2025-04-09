import instance from "./instance";

const noteServices = {
    getAllNotes: async () => {
        return await instance.get('/notes');
    },
    getNoteById: async (id) => {
        return await instance.get(`/notes/${id}`);
    },
    updateNote: async (id, note) => {
        return await instance.put(`/notes/${id}`, note);
    },
    createNote: async (note) => {
        return await instance.post('/notes', note);
    },
    deleteNote: async (id) => {
        return await instance.delete(`/notes/${id}`);
    }
}

export default noteServices;