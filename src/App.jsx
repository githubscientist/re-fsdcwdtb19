import Description from "./components/Description";
import Header from "./components/Header";

// Base Component
function App() {

    let a = 50;
    let b = 60;

    return (
        <>
            <Header />
            <Description
                a={a}
                b={b}
            />
        </>
    )
}

export default App;