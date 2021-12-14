 
import React from 'react';
import {TodoContext} from '../TodoContext';
import "../styles/TodoSearch.css";

function TodoSearch(){
    const { search, setSearch } = React.useContext(TodoContext);

    const onSearchValueChange=(event)=>{
        setSearch(event.target.value)
    }

    return <input 
        onChange={onSearchValueChange}
        className='TodoSearch' 
        value={search}
        placeholder='Cebolla'/>
}

export { TodoSearch}
