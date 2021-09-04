import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';

const PoemPage = ({poems}) => {
    const id = useParams().id
    const poem = poems.find(p => p.id === Number(id))
    
    const [votes,setVote] = useState(poem.votes)
    

    const addNewVote= (newVote) => {
        newVote=votes+1
        console.log(newVote)
        axios.post("http://localhost:3001/api/poems/"+poem.id,newVote)
        .then(response => {
            console.log(response)
            setVote(newVote)
        })
    }

    return(
        <div>
            <h2>{poem.title}</h2>
            <div>{poem.author}</div>
            <div><strong>{poem.text}</strong></div>
            <div>{votes}</div>

            <button onClick={addNewVote}>Vote</button>
            
        </div>
    );

}

export default PoemPage