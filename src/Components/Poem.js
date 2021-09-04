import React,{useState} from 'react';
import PoemForm from './PoemForm.js'
import {Link} from "react-router-dom";

const Poem = ({poem, deleteFn, updateFn}) =>{
    const [editing, setEditing] = useState(false)

    const editAction = () => {
      setEditing(true)
    }
    
    const finaliseEdit =  (newPoem) => {
      console.log(newPoem)
      setEditing(false)
      updateFn(newPoem)
    }
  
    const cancelEdit = () => {
      setEditing(false)
    }
  
    if (editing) {
      return (
        <li>
        <PoemForm updateFn={finaliseEdit} poemInfo={poem} />
        <button onClick={cancelEdit}>Cancel Edit</button>
        </li>
      )
    } else {
    return (
        <li>{poem.author}: 
         <Link to={`/poems/${poem.id}`}>{poem.title} </Link> {poem.text} <button onClick={() => deleteFn(poem)}>Delete</button> <button onClick={editAction}>Edit</button>
        </li>
      )
    }


}

export default Poem;
