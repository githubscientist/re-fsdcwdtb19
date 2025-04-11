import React, { createContext, useState } from 'react'
import A from './components/A';

// create a new context
export const CountContext = createContext();

// props drilling
const App = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{ count, setCount }}>
                <A />
            </CountContext.Provider>
        </div>
    )
}

export default App