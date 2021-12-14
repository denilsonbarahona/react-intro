import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/CreateTodoButton.css";

function CreateTodoButton(){

    const {setOpenModal} = React.useContext(TodoContext);

    const onClickButton = ()=> {
        setOpenModal(prevState => !prevState)
    }

    return(
        <button 
            onClick={onClickButton}
            className="CreateTodoButton">
            +
        </button>) 
}

export {CreateTodoButton};