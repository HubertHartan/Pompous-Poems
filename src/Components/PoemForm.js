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
            <div className='inputForm'>
                <label htmlFor="author">Author: </label>
                <input name="author" onChange={updateField} value={formInfo.author}></input>
            </div>

            <div className='inputForm'>
                <label htmlFor="title">Title: </label>
                <input name="title" onChange={updateField} value={formInfo.title}></input>
            </div>

            <div className='inputForm'>
                <label htmlFor="text">Text: </label>
                <textarea name="text" onChange={updateField} value={formInfo.text}> <ReactMarkdown></ReactMarkdown></textarea>
            </div>

            <div className='inputForm'>
                <input type="submit" value="Add Poem"></input>
            </div>
        </form>
    )
}

export default PoemForm