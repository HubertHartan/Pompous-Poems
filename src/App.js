import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Pages/Home"
import Add from "./Pages/Add"
import PoemPage from "./Pages/PoemPage"


import axios from 'axios'


const App = () => {

    const padding = {
        padding: 5
    }
    
    const [poems,setPoems] = useState([])

    const getPoems = () => {
        axios.get("http://localhost:3001/api/poems")
        .then((response) => {
            setPoems(response.data)
        })
    }

    const addNewPoem = (newPoem) => {
        axios.post("http://localhost:3001/api/poems",newPoem)
        .then(response => {
            console.log(response)
            setPoems([...poems, response.data])
        })
    }

   

    useEffect(() => {
        getPoems()
    },[])

    const removePoem = (poem) => {
        console.log("removed",poem)
        axios.delete("http://localhost:3001/api/poems/" + poem.id)
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
        .catch((error) => {
            console.log(error)
            // refresh the list of units from the server
            getPoems()
        })
    }




    return(

        <Router>
            <div>
                <Link style = {padding} to="/">Home</Link>
                <Link style = {padding} to="/addpoem">Add New Poem</Link>
            </div>

            <Switch>
                <Route path="/poems/:id">
                     <PoemPage poems={poems}/>
                </Route>

                <Route path="/addpoem">
                     <Add addFn={addNewPoem} />
                </Route>

                <Route path ="/">
                    <Home list={poems} removeFn={removePoem} reloadFn={updatePoem}/>
                </Route>

            </Switch>

        </Router>

    );
}

export default App;
