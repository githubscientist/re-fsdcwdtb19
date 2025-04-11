import { useContext } from "react";
import { CountContext } from '../App';

function D() {

    const { count, setCount } = useContext(CountContext);

    return <>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}

export default D;