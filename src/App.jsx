const App = () => {

    let count = 0;

    function handleClick() {
        count++; // count = count + 1
        console.log(count);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button
                onClick={handleClick}
            >Increase</button>
        </>
    )
}

export default App;