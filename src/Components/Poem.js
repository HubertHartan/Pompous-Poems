import React from 'react';
import {Link} from "react-router-dom";
import './Poem.css';

const Poem = ({poem}) =>{
  
      return (
        <li className>
          <Link to={`/poems/${poem.id}`}><div className='title'>{poem.title}</div></Link> 
          <div className='author'>By: {poem.author} </div>
        </li>
      )
    
}

export default Poem;
