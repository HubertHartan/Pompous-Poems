import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Pages/Home"
import Add from "./Pages/Add"
import PoemPage from "./Pages/PoemPage"
import './App.css';

import axios from 'axios'


const App = () => {

    const padding = {
        padding: 5
    }
    
    const [poems,setPoems] = useState([])

    const getPoems = () => {
        axios.get("/api/poems")
        .then((response) => {
            setPoems(response.data)
        })
    }

    const addNewPoem = (newPoem) => {
        axios.post("/api/poems",newPoem)
        .then(response => {
            console.log(response)
            setPoems([...poems, response.data])
        })
    }

    const updatePoem = (poem) => {
        const votes = poem.votes + 1
        poem.votes = votes
        console.log("updating poem", poem)
        axios.put("/api/poems/" + poem.id, poem)
        .then((response) => {
          console.log("RESPONSE", response)
          getPoems()
        })
      }

   

    useEffect(() => {
        getPoems()
    },[])

    
    




    return(

        <Router>
            <div className='navi'>
                <Link style = {padding} to="/">Home</Link>
                <Link style = {padding} to="/addpoem">Add New Poem</Link>
            </div>

            <Switch>
                <Route path="/poems/:id">
                     <PoemPage poems={poems} updateFn={updatePoem}/>
                </Route>

                <Route path="/addpoem">
                     <Add addFn={addNewPoem} />
                </Route>

                <Route path ="/">
                    <Home list={poems}/>
                </Route>

            </Switch>

        </Router>

    );
}

export default App;
