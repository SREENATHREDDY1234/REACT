import React, {useState,useEffect,useRef} from 'react'

// const App = ()=>{
//     const[inputValue,setInputValue] = useState("");
//     const count = useRef(0);
//     useEffect(()=>{
//         count.current += 1;
//     });

//     return(
//         <div>
//            <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h1>Render Count: {count.current}</h1> 
//         </div>
//     )
// }

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default App;