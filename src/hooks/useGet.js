import { useEffect, useState } from 'react';
import {getPosts} from "../../http.service.js";

export function useGet(forwardedFunctionToUse, initialValue) {

    const [items, setItems] = useState(initialValue);
    const [loadingItems, setLoadingItems] = useState(false);
    const [errorData, setErrorData] = useState();

    useEffect(() => {
        async function getData() {
            setLoadingItems(true);

            try {
                const receivedItems = await forwardedFunctionToUse();
                setItems(receivedItems);

            } catch (e) {
                setErrorData({errorMessage: e.toString()});
            }

            // this setTimeout is added to simulate longer loading times, and to make sure that waiting text "Loading items" is presented
            setTimeout(() => {
                setLoadingItems(false);
            }, 2000);
        }

        getData();
    }, [forwardedFunctionToUse]);
    // forwardedFunctionToUse added in dependency array
    // to assert, that whenever the function changes (hook is used for fetching different url - then the block will be re-executed


    return {
        loadingItems,
        items,
        errorData
    }
}