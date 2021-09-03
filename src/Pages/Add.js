import React from "react";
import PoemForm from "../Components/PoemForm.js"

const Add = ({addFn}) => {

    return(
        <div>
            <PoemForm updateFn={addFn}/>
        </div>
    );
}

export default Add;