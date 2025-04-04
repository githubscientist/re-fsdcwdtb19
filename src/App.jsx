import { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default App;