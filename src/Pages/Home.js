import React from "react";
import Poem from "../Components/Poem.js"


const Home = ({list,removeFn,reloadFn}) => {
    
    return(     
        <div>
            <ul>
                {list.map((poem) => 
                (<Poem key={poem.id} poem={poem} deleteFn={removeFn} updateFn={reloadFn}/>))}
            </ul>
        </div>
    );
    
}

export default Home;