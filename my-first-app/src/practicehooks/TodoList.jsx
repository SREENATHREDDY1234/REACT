import React,{useState} from "react";
import './practice.css'

function App(){
    const todoList = [];
    const [list,setList] = useState(todoList);
    const [text,setText] = useState("");
    const [editing,setEditing] = useState(false);
    const [editable,setEditable] = useState({})

    const changeText = (e)=>{
        setText(e.target.value);
    }
    const handleAdd = (e)=>{
        const obj = {
            txt : text,
            id : new Date().getTime().toString()
        }
        setList([...list,obj]);
        setText("");
    }
    const handleEdit = (id)=>{
        setEditing(true);
        setEditable({
            id : id,
            isEditing:true
        })
        const target = list.find(eachItem => eachItem.id === id);
        setText(target.txt);
    }
    const handleEditing = ()=>{
        setEditing(false);
        let editableItem = list.find(eachItem=>eachItem.id === editable.id);
        editableItem.txt = text;
        setText("");
    }
    const handleDelete = (e)=>{
        e.target.parentElement.remove();
    }
    return(
        <div className="b-container">
            <div>
                <h1 className="heading">TodoList</h1>
                <input type="text" id="input" className = "input" placeholder="Enter text" name="text" onChange={changeText}  value={text}/>
                {
                    editing ? 
                    <button className="btn" onClick={handleEditing}>Edit</button>:
                    <button className="btn" onClick={handleAdd}>Add</button>
                }   
            </div>
            <h1 className="heading-2">Tasks</h1>
           <div className="list-container">
            {(list.length === 0 )&&<p className="para">There is no items in the list</p>}
            {
                list.map((obj)=>{
                    return <div className="eachlist" key={obj.id}>
                                <p>{obj.txt}</p>
                                <button className="btn btn-blue" onClick={()=>handleEdit(obj.id)}>edit</button>
                                <button className="btn btn-red" onClick={handleDelete}>delete</button>
                            </div>
                })
            }
           </div>
        </div>
    )    
}

export default App;