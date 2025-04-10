import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'Incr') {
        return state + 1;
    }

    return state;
}

const App = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    const handleIncrement = () => {
        dispatch({ type: 'Incr' });
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default App;