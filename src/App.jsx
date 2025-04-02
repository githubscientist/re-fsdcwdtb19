import { useState } from "react";

const App = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function handleLike() {
        setLikes(likes + 1);
    }

    function handleDislike() {
        setDislikes(dislikes + 1);
    }

    return (
        <>
            <button onClick={handleLike}>Like</button> {likes} likes
            <br /><br />
            <button onClick={handleDislike}>Dislike</button> {dislikes} dislikes
        </>
    )
}

export default App;