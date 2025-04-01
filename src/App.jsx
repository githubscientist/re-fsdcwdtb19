import { useState } from "react";

const App = () => {

    let [count, setCount] = useState(0);

    // state change causes re-render
    function handleClick() {
        setCount(count + 1);
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