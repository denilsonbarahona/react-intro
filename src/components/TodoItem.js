import React from "react";
import {TodoIcon} from './TodoIcon';
import "../styles/TodoItem.css";

function TodoItem(props){ 
    
    const {onComplete, onDelete } = props;

    return (
    <li className="TodoItem">
        <span 
            onClick={()=>onComplete(props.text)}
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>

            <TodoIcon ClassIcon="icon-checkmark"/>
            </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span  
            onClick={()=>onDelete(props.text)}
            className="Icon Icon-delete">
                <TodoIcon ClassIcon="icon-cross"/>
            </span>
    </li> )
}

export {TodoItem}