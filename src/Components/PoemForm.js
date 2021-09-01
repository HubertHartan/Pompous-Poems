import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const PoemForm = ({updateFn, poemInfo}) => {

    let initialState = poemInfo
    if (!initialState) {
        initialState = {author: '', title: '', text: ''}
    }

    const [formInfo, setFormInfo] = useState(initialState)

    const updateField = (event) => {
        
        const name = event.target.attributes.name.value
        console.log(name, event.target.value)
        if (name === "title") {
            setFormInfo({...formInfo, title: event.target.value})
        } else if (name === "author") {
            setFormInfo({...formInfo, author: event.target.value})
        } else if (name === "text") {
            setFormInfo({...formInfo, text: event.target.value})
        }
    }



    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)
        updateFn(formInfo)
        setFormInfo(initialState)
    }
    
    return (
        <form onSubmit={formHandler}>
            <label htmlFor="author">Author</label>
            <input name="author" onChange={updateField} value={formInfo.code}></input>

            <label htmlFor="title">Title</label>
            <input name="title" onChange={updateField} value={formInfo.title}></input>

            <label htmlFor="text">Text</label>
            <input name="text" onChange={updateField} value={formInfo.test}></input>


            <input type="submit"></input>
        </form>
    )
}

export default PoemForm