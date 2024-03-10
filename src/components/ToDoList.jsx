import {getTodoItems} from "../../http.service.js";
import {useEffect, useState} from "react";

export default function ToDoList(){

    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(false);
    const [errorData, setErrorData] = useState();


    // useEffect is required here to make sure, that React will not rerun
    // http.service.get method everytime when a component is re-rendered.
    useEffect(() => {

        // a wrapper function getToDoItemsFromWeb() must have async modifier - because the function called "getTodoItems" will not be resolved immediately. It may take some time until data is retrieved from the http endpoint - therefore the getTodoItems method returns a promise that has to be awaited.
        async function getToDoItemsFromWeb() {
            setLoadingItems(true);

            try {
                const receivedItems = await getTodoItems();
                setItems(receivedItems);

            } catch (e) {
                setErrorData({errorMessage: e.toString()});
            }

            // this setTimeout is added to simulate longer loading times, and to make sure that waiting text "Loading items" is presented
            setTimeout(() => {
                setLoadingItems(false);
            }, 2000);
        }

        getToDoItemsFromWeb();
    }, []);

    return (
            <>
                <h1 className="text-danger">To Do list:</h1>
                {loadingItems ? <p>waiting for items...</p> : (
                    <ul>
                        {items.map(i => (<li key={i.id}>{i.title}</li>))}
                    </ul>
                )}
            </>
    );
}