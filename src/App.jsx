import { useRef } from "react";

const App = () => {

    // using ordinary js variables
    // variable value changes does not causes component re-rendering.
    let count = useRef(0);

    const handleIncrease = () => {
        // increase the count value
        count.current = count.current + 1;

        // print the count.current
        console.log(count.current);
    }

    console.log(count);

    return (
        <div>
            <h1>Counter: {count.current}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default App;