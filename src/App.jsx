import axios from "axios";
import { useEffect, useState } from "react";

// Promise: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise Chaining: Promise chaining is a technique used to handle asynchronous operations in JavaScript. It allows you to execute a series of asynchronous tasks in a sequence, where each task depends on the result of the previous one.
// It is achieved by returning a new promise from the `then` method of the previous promise.

// Keys in Array: In React, when rendering a list of elements, each element should have a unique key prop. This helps React identify which items have changed, are added, or are removed. Keys should be stable, predictable, and unique to the list.

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response.data);
            })
            .catch(() => {
                console.log('api call failed');
            })
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return (
        <>
            <h1>Posts</h1>
            {
                posts.map((post, index) => {
                    return <div key={index}>
                        <h3>{post.id}: {post.title}</h3>
                        <p><em>{post.body}</em></p>
                        <hr />
                    </div>
                })
            }
        </>
    )
}

export default App;