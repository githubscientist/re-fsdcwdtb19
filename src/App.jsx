import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./redux/features/counterSlice";

const App = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default App;