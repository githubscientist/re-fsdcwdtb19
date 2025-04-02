import { useEffect, useState } from "react";

// Promise: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise Chaining: Promise chaining is a technique used to handle asynchronous operations in JavaScript. It allows you to execute a series of asynchronous tasks in a sequence, where each task depends on the result of the previous one.
// It is achieved by returning a new promise from the `then` method of the previous promise.

const App = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                // success callback
                return response.json();
            })
            .then((posts) => {
                setPosts(posts);
            })
            .catch(() => {
                // error callback
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
                posts.map(post => {
                    return <div>
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