import React from "react";
import {useParams} from "react-router-dom";

const PoemPage = ({poems, updateFn}) => {
    const id = useParams().id
    const poem = poems.find(p => p.id === Number(id))
    
    

    

    return(
        <div>
            <h2>{poem.title}</h2>
            <div>{poem.author}</div>
            <div><strong>{poem.text}</strong></div>
            <div>{poem.votes}</div>

            <button onClick={updateFn(poem)}>Vote</button>
            
        </div>
    );

}

export default PoemPage