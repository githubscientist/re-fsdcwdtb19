import instance from "../../services/instance";

const noteLoader = async ({ request }) => {

    // read the params id from the URL
    const id = new URL(request.url).searchParams.get("id")

    const response = await instance.get(`/notes/${id}`)
    return response.data;
}

export default noteLoader;