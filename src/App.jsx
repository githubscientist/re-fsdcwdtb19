// Functional Component: Stateless Component
// const App = () => {
//     return (
//         <div>App</div>
//     )
// }

// Class Component: Stateful Component
import React from "react";

class App extends React.Component {
    // constrctor: a special method that is called when an instance or object of the class is created
    constructor(props) {
        super(props); // calls the constructor of the parent class React

        this.state = {
            count: 0,
            isVisible: true
        }
    }

    handleIncrement = () => {
        // this.setState((prevState) => ({
        //     count: prevState.count + 1
        // }));

        this.setState({
            count: this.state.count + 1
        })
    }

    // lifecycle methods
    componentDidMount() {
        // this is called when the component is mounted
        console.log("Component mounted");
    }

    componentDidUpdate() {
        // this is called when the component is updated
        console.log("Component updated");
    }

    componentWillUnmount() {
        // this is called when the component is unmounted
        console.log("Component unmounted");
    }

    render() {
        return (
            <>
                <button
                    onClick={() => this.setState({ ...this.state, isVisible: !this.state.isVisible })}
                >Hide</button>
                {
                    this.state.isVisible && (
                        <div>
                            <h1>Count: {this.state.count}</h1>
                            <button
                                onClick={this.handleIncrement}
                            >Increment</button>
                        </div>
                    )
                }
            </>
        )
    }
}

export default App;