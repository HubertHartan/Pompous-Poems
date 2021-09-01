import React,{useState} from 'react';
import PoemForm from './PoemForm.js'


const Poem = ({poem}) =>{
    const [editing, setEditing] = useState(false)

    const editAction = () => {
      setEditing(true)
    }
    
    const finaliseEdit =  (newUnit) => {
      console.log(newUnit)
      setEditing(false)
      updateFn(newUnit)
    }
  
    const cancelEdit = () => {
      setEditing(false)
    }
  
    if (editing) {
      return (
        <li>
        <UnitForm updateFn={finaliseEdit} unitInfo={unit} />
        <button onClick={cancelEdit}>Cancel Edit</button>
        </li>
      )
    } else {
    return (
        <li>{poem.author}: 
        {poem.title} 
        {opem.text}
        <button onClick={() => deleteFn(unit)}>Delete</button>
        <button onClick={editAction}>Edit</button>
        </li>
      )
    }


}

export default Poem;