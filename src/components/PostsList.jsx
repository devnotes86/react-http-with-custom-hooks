import {getPosts, getTodoItems} from "../../http.service.js";
import {useGet} from '../hooks/useGet.js';

export default function PostsList(){

    // calling custom hook and passing getPosts function from http.service.js.
    // [] - empty array passed for displaying initialValue
    const { loadingItems,  items, errorData} = useGet(getPosts, []);

    if (errorData) {
        return <h1 className="text-danger">{errorData.errorMessage.toString()}</h1>;
    } else {
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


}