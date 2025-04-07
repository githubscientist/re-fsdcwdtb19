import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type == 'INCR') {
        return state + 1;
    }
}

const App = () => {

    const [count, dispatch] = useReducer(reducer, 0);

    // const handleIncrease = () => {
    //     dispatch({ type: 'INCR' });
    // }

    console.log(count);

    return (
        <>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCR' })}>Increase</button>
        </>
    )
}

export default App;