import { useRef } from "react";

// Uncontrolled Component
// A component that does not control the input value
const App = () => {

    const name = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(name.current);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    ref={name}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default App;