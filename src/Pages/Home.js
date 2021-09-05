import React from "react";
import Poem from "../Components/Poem.js"
import './Home.css';

const Home = ({list}) => {
    
    return(     
        <div>
            <ul>
                {list.map((poem) => 
                (<Poem key={poem.id} poem={poem}/>))}
            </ul>
        </div>
    );
    
}

export default Home;