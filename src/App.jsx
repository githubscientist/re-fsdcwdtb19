import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === 'INCR') {
        return state + 1;
    } else if (action.type === 'DECR') {
        return state - 1;
    }

    return state;
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, 0);

    function handleIncrement() {
        dispatch({ type: 'INCR' });
    }

    function handleDecrement() {
        dispatch({ type: 'DECR' });
    }

    return (
        <div>
            <h1>Count: {state}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <br /><br />
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default App;