import { useEffect, useState } from "react";

// Controlled component
// Here, we use the useState hook to manage the state of the input field.
const App = () => {

    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted!');
        console.log(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default App;