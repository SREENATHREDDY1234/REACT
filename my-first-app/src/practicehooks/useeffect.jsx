import "./practice"
import {useState, useEffect } from "react"

const URL = "https://jsonplaceholder.typicode.com/users";

function App(){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect...")
    }) 
    const handleinc = ()=>{
        setCount(count+1);
    }
    return(
        <>
            <h1>I've rendered {count} times</h1>
            <button onClick={handleinc}>increment</button>
        </>
    )
}

export default App;