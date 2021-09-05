import React from 'react';
import {Link} from "react-router-dom";

const Poem = ({poem}) =>{
  
      return (
        <li>
          <div><Link to={`/poems/${poem.id}`}>{poem.title}</Link> </div>
          <div>By: {poem.author} </div>
        </li>
      )
    
}

export default Poem;
