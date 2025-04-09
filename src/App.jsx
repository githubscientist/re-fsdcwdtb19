import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "./redux/features/counter/counterSlice";

const App = () => {

    const dispatch = useDispatch();
    const count = useSelector(selectCount);

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