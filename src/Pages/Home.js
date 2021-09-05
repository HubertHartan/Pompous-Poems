import React from "react";
import Poem from "../Components/Poem.js"


const Home = ({list}) => {
    
    return(
        <div>
            <div className='pageTitle'> 
                Popular Poetry
            </div>

            <div>
                <ul>
                    {/*Sorts the poems based on descending number of votes 
                    Then displays only the top 5 most voted poems
                    */}
                    {list.sort((a,b) => b.votes-a.votes).slice(0,5).map((poem) => 
                    (<Poem key={poem.id} poem={poem}/>))}
                </ul>
            </div>
        </div>
    );
    
}

export default Home;