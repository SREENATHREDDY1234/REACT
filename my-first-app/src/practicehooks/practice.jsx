import "./practice.css"
function clickhandle(par1){
    console.log("Clicked",par1);
}
function Test(){
    return <button onClick={()=>{return clickhandle("sreenath")}}>click me</button>
}
export default Test;