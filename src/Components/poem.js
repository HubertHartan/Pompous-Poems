import React,{useState} from 'react';

const poem = ({poem}) =>{
    return(
        <p>{poem.title}</p>,
        <p>{poem.author}</p>,
        <p>{poem.text}</p>,
        <p>{poem.votes}</p>
    )

}

export default poem;