function Header() {
    return <h1>Hello World!</h1>
}

// our first component
// component: reusable piece of UI
function App() {
    return (
        <>
            <Header />
            <p>Hello World, Thanks for visiting my Webpage!</p>
        </>
    )
}

export default App;