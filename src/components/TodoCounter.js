import React from "react";
import {TodoContext} from '../TodoContext';
import "../styles/TodoCounter.css"
 


function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">You have completed {completedTodos} of {totalTodos} TODOs</h2>
    )
}


export {TodoCounter};