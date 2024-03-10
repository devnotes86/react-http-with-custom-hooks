import {
    URL_JSONPLACEHOLDER_API_GET_POSTS,
    URL_JSONPLACEHOLDER_API_GET_TODOS
} from "./urls.js";
export async function getTodoItems() {
    const response = await fetch(URL_JSONPLACEHOLDER_API_GET_TODOS)
    const responseData = await response.json();


    console.log(responseData);
    if (response.ok === false){
        throw new Error('Todos fetching failed.');
    } else {
        return responseData;
    }
}

export async function getPosts() {
    const response = await fetch(URL_JSONPLACEHOLDER_API_GET_POSTS)
    const responseData = await response.json();


    console.log(responseData);
    if (response.ok === false){
        throw new Error('Posts fetching failed.');
    } else {
        return responseData;
    }
}