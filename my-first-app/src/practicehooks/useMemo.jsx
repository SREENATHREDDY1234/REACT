import React, {useState,useEffect,useMemo} from 'react'
import "./practice.css"

function App() {
  const [number,setNumber] = useState(0);
  const [dark,setDark] = useState(false);
  const slowFunction = (number)=>{
    // for(let i = 0;i<1000000000;i++){

    // }
    return number*number;
  }
  const doubleNumber = useMemo(()=>{
    return slowFunction(number);
  },[number]);
  const themeChange = ()=>{
    return{
        backgroundColor : dark ? "black" : "transparent",
        color : dark ? "white" : "black",
        padding:"10px"
    }
  }
  
  useEffect(()=>{
    console.log("theme changed");
  },[themeChange])
  return (
    <div  className='container-1'>
      <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      </div>
      <div>
        <button onClick={()=>setDark(!dark)}>change Theme</button>
      </div>
      <p style={themeChange()}>The number :{doubleNumber}</p>
    </div>
  );
}

export default App;