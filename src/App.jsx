import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type == 'INCR') {
        return state + 1;
    } else if (action.type == 'DECR') {
        return state - 1;
    } else if (action.type == 'RESET') {
        return 0;
    }

    return state;
}

const App = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    const handleIncrease = () => {
        dispatch({ type: 'INCR' });
    }

    const handleDecrease = () => {
        dispatch({ type: 'DECR' });
    }

    const handleReset = () => {
        dispatch({ type: 'RESET' });
    }

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>Increase</button>

            <button onClick={handleDecrease}>Decrease</button>

            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default App;