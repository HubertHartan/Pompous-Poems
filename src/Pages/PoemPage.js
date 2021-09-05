import React, {useState} from "react";
import {useParams} from "react-router-dom";

import axios from 'axios'

const PoemPage = ({poems,updateFn}) => {
    const id = useParams().id
    const poem = poems.find(p => p.id === Number(id))
    
    const [votes,setVotes] = useState(poem.votes)

    const voteHandler = (event) => {
        event.preventDefault()
        updateFn(poem)
        setVotes(votes+1)
    }

    return(
        <div>
            <h2>{poem.title}</h2>
            <div>{poem.author}</div>
            <div><strong>{poem.text}</strong></div>
            <div>{votes}</div>

            <button onClick={voteHandler}>Vote</button>
            
        </div>
    );

}

export default PoemPage