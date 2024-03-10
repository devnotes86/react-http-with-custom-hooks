import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from "./components/ToDoList.jsx";
import PostsList from "./components/PostsList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <ToDoList></ToDoList>
                </div>
                <div className="col-sm">
                    <PostsList></PostsList>
                </div>

            </div>
        </div>




    </>
  )
}

export default App
