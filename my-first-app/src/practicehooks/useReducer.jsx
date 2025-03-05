import React, { useReducer } from "react"
import "./practice.css"
const reducer = (state,action)=>{
    // console.log(state);
    // console.log(action);
    if(action.type === "DELETE_PERSON"){
        const newPersons = state.data.filter((eachPerson)=>{
            return eachPerson.id != action.payload;
        })
        return {
            data:newPersons,
            length:state.length-1
        }
    }
    return state;
}
function App(){
    const initialState = {
        data:[
            {id:1,firstName:"sreenath",email:"email1@gmail.com"},
            {id:2,firstName:"charan",email:"email2@gmail.com"},
        ],
        length:2,
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    const handleDelete = (id)=>{
        dispatch({
            type:"DELETE_PERSON",
            payload:id
        })
    }

    const handleUpdate = (id)=>{
        dispatch({
            type:"UPDATE_PERSON",
            payload:id
        })
    }
    return(
        <div className="container-1">
        <h1>current users length:{state.length}</h1>
        {
            state.data.map((eachItem) => {
                const {id,firstName,email} = eachItem;
                return <div key = {id}>
                    <h3>{firstName}</h3>
                    <p>{email}</p>
                    <button onClick={()=>handleDelete(id)}>delete</button>
                    <button onClick={()=>handleUpdate(id)}>Update</button>
                </div>
           })
        }   
        </div>
    )
}
export default App;
