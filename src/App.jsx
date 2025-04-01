import Description from "./components/Description";
import Header from "./components/Header";

// Base Component
function App() {

    // create a function to get the values from the child component
    function get(a, b) {
        console.log(a, b);
    }

    // pass the function as a prop to the child component

    return (
        <>
            <Header />
            <Description
                get={get}
            />
        </>
    )
}

export default App;