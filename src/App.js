import React, { useState, useEffect } from "react";
import PoemForm from "./Components/PoemForm.js"
import Poem from "./Components/Poem.js"
import axios from 'axios'


const App = () => {
    const [poems,setPoems] = useState([])
    
    const addNewPoem = (newPoem) => {
        axios.post("http://localhost:3001/api/poems",newPoem)
        .then(response => {
            console.log(response)
            setPoems([...poems, response.data])
        })
    }

    const getPoems = () => {
        axios.get("http://localhost:3001/api/poems")
        .then((response) => {
            setPoems(response.data)
        })
    }

    useEffect(() => {
        getPoems()
    },[])

    const removePoem = (poem) => {
        console.log("removed",poem)
        axios.delete("http://localhost:3001/api/poems" + poem.id)
        .then((response) => {
            console.log("remove succeeded")
            // delete local copy
            const newPoems = poems.filter(p => p.id !== poem.id)
            setPoems(newPoems)
        })
        .catch((error) => {
            console.log("ERROR!")
            // refresh the list poems from the server
            getPoems()
        })
    }
    
    const updatePoem = (poem) => {
        console.log("updating poem", poem)
        axios.put("http://localhost:3001/api/poems/" + poem.id, poem)
        .then((response) => {
            console.log(response)
            getPoems()
        })
    }

    return(
        <div className = "App">
            <PoemForm updateFn={addNewPoem}/>

            <ul>
                {poems.map((poem) => (<Poem key={poem.id} poem={poem} deleteFn={removePoem} updateFn={updatePoem}/>))}
            </ul>
        </div>
    );
}

export default App;
