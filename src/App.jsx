import Description from "./components/Description";
import Header from "./components/Header";

// Base Component
function App() {

    let a = 50;
    let b = 60;

    return (
        <>
            <Header />
            <p>
                The sum of {a} and {b} is {a + b}.
            </p>
        </>
    )
}

export default App;