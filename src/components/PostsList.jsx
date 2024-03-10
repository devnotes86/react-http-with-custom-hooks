import {getPosts, getTodoItems} from "../../http.service.js";
import {useEffect, useState} from "react";

export default function PostsList(){

    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(false);
    const [errorData, setErrorData] = useState();

    useEffect(() => {
        async function getPostsFromWeb() {
            setLoadingItems(true);

            try {
                const receivedItems = await getPosts();
                setItems(receivedItems);

            } catch (e) {
                setErrorData({errorMessage: e.toString()});
            }

            // this setTimeout is added to simulate longer loading times, and to make sure that waiting text "Loading items" is presented
            setTimeout(() => {
                setLoadingItems(false);
            }, 2000);
        }

        getPostsFromWeb();
    }, []);


    return (
            <>
                <h1 className="text-danger">Posts:</h1>
                {loadingItems ? <p>waiting for items...</p> : (

                    <ul>
                        {items.map(i => (<li key={i.id}>{i.title}</li>))}
                    </ul>
                )}

            </>
    );
}