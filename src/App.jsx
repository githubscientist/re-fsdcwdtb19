import { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default App;