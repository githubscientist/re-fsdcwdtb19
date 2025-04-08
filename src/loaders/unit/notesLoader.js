const notesLoader = async () => {
    const response = await fetch('https://67f3ed22cbef97f40d2cb280.mockapi.io/notes')
    const data = await response.json();
    return data;
}

export default notesLoader;