import noteServices from "../../services/noteServices";

const noteLoader = async ({ request }) => {

    // read the params id from the URL
    const id = new URL(request.url).searchParams.get("id")

    const response = await noteServices.getNoteById(id);
    return response.data;
}

export default noteLoader;