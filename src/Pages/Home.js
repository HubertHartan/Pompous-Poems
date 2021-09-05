import React from "react";
import Poem from "../Components/Poem.js"
import './Home.css';

const Home = ({list}) => {
    
    return(
        <div>
            <div className='pageTitle'> 
                Popular Poetry
            </div>

            <div>
                <ul>
                    {list.map((poem) => 
                    (<Poem key={poem.id} poem={poem}/>))}
                </ul>
            </div>
        </div>
    );
    
}

export default Home;