import { useEffect, useState } from "react";

const App = () => {

    const [positives, setPositives] = useState(0);
    const [negatives, setNegatives] = useState(0);

    // this runs when the component mounts
    // it will also run when the component updates
    // useEffect(() => {
    //     console.log('App mounted');
    // });

    // this runs when the component mounts and only once
    // useEffect(() => {
    //     console.log('App mounted');
    // }, []);

    // this runs when the component mounts
    // and when the negatives state changes
    useEffect(() => {
        console.log('App mounted');
    }, [negatives]);

    return (
        <>
            <div>
                <h1>Positives: {positives}</h1>
                <button onClick={() => setPositives(positives + 1)}>Positive Inc</button>
            </div>
            <div>
                <h1>Negatives: {negatives}</h1>
                <button onClick={() => setNegatives(negatives + 1)}>Negative Inc</button>
            </div>
        </>
    )
}

export default App;