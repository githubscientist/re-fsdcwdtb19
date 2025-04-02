import { useState } from "react";

const App = () => {

    const [reactions, setReactions] = useState({
        likes: 0,
        dislikes: 0
    });

    function handleLike() {
        setReactions({
            ...reactions,
            likes: reactions.likes + 1,
        })
    }

    function handleDislike() {
        setReactions({
            ...reactions,
            dislikes: reactions.dislikes + 1
        })
    }

    return (
        <>
            <button onClick={handleLike}>Like</button> {reactions.likes} likes
            <br /><br />
            <button onClick={handleDislike}>Dislike</button> {reactions.dislikes} dislikes
        </>
    )
}

export default App;