import React, {useState} from "react";
import {useParams} from "react-router-dom";
import ReactMarkdown from 'react-markdown';


const PoemPage = ({poems,voteFn}) => {
    const id = useParams().id
    const poem = poems.find(p => p.id === Number(id))
    
    const [votes,setVotes] = useState(poem.votes)

    const voteHandler = (event) => {
        event.preventDefault()
        voteFn(poem)
        setVotes(votes+1)
    }

    return(
        <div>
            <div>{poem.title}</div>
            <div>{poem.author}</div>
            <div><ReactMarkdown>{poem.text}</ReactMarkdown></div>
            <div>{votes} Votes</div>
            <button onClick={voteHandler}>Vote</button>
            
        </div>
    );

}

export default PoemPage