import { useEffect, useState } from "react";

const App = () => {

    const [count, setCount] = useState(0);

    // this runs when the component mounts
    // it will also run when the component updates
    useEffect(() => {
        console.log('App mounted');
    });

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default App;