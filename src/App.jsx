import A from "./components/A";

const App = () => {

    // data in the parent component App
    let count = 10;

    return (
        <A
            count={count}
        />
    )
}

export default App;