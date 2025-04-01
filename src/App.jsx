import Description from "./components/Description";
import Header from "./components/Header";

// Base Component
function App() {

    let birthdate = new Date("1990-01-04");
    let today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();

    console.log(age);


    return (
        <>
            <Header />
            <Description />
        </>
    )
}

export default App;