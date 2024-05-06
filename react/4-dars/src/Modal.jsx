import { useEffect, useState } from "react";
import axios from 'axios';

export const Modal = () => {
    const [ post, setPost ] = useState({});
    const [isLoading, setSetIsLoading] = useState(false);

    const fetchPost = () => {
        setSetIsLoading(true);
        axios
            .get('https://jsonplaceholder.typicode.com/posts/10')
            .then((data) => {
                console.log(data.data);
                setPost(data.data);
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setSetIsLoading(false)
            })
    }

    useEffect(() => {
        const body = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        axios
            .post("https://jsonplaceholder.typicode.com/posts", body, {
                headers: {
                    "Authorization": "token"
                }
            })
    }, [])
    
    return (
        <>
            <h1>Modal</h1>
            <div>
                <button disabled={isLoading} onClick={fetchPost}>Fetch Post</button>
            </div>

            {
                isLoading && (
                    <p>Loading...</p>
                )
            }
        <div>
            <h2>
            Post title: { post.title }
            </h2>
            <p> { post.body } </p>
        </div>
        </>
    )
}