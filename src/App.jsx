import { useReducer } from "react";

function reducer(state, action) {
    if (action.type === 'INCR') {
        return state + 1;
    }

    return state;
}


const App = () => {

    const [state, dispatch] = useReducer(reducer, 0);

    function handleClick() {
        dispatch({ type: 'INCR' });
    }

    return (
        <div>
            <h1>Count: {state}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default App;