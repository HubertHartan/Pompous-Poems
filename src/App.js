import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from "./Pages/Home"
import Add from "./Pages/Add"
import PoemPage from "./Pages/PoemPage"
import './App.css';

import axios from 'axios'


const App = () => {

 
    
    const [poems,setPoems] = useState([])


    //Request Calls to Backend
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

    const upVote = (poem) => {
        const votes = poem.votes + 1
        poem.votes = votes
        console.log("updating poem", poem)
        axios.post("/api/poems/" + poem.id, poem)
        .then((response) => {
          console.log("RESPONSE", response)
        })
      }

   

    useEffect(() => {
        getPoems()
    },[])

    
    




    return(
        //Navigation to different pages
        <Router>
            <div className='navi'>
                <ul>
                <Link to="/"> <li>Home</li></Link>
                <Link to="/addpoem"><li>Add New Poem</li></Link>
                </ul>
            </div>

            <Switch>
                <Route path="/poems/:id">
                     <PoemPage poems={poems} voteFn={upVote}/>
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
