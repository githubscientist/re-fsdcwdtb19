const noteLoader = async ({ params }) => {

    // read the params id from the URL
    const { id } = params;

    const response = await fetch(`https://67f3ed22cbef97f40d2cb280.mockapi.io/notes/${id}`)
    const data = await response.json();
    return data;
}

export default noteLoader;