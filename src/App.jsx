import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./redux/features/counterSlice";

const App = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button> &nbsp;
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default App;