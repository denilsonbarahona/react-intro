import React from 'react';
import { TodoContext } from '../TodoContext';
import "../styles/CreateForm.css"


const CreateForm=()=>{

    const {onSave, setOpenModal} = React.useContext(TodoContext);

    const onCancel=()=>{
        setOpenModal(false);
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(e.target) 
        const text = formData.get("textArea");
        onSave(text);
        onCancel();
    }

    return(
        <form method='post' className='Form' onSubmit={onSubmit}>
            <label 
                className='Form-label' 
                htmlFor="textArea">Submit a new task</label>
            <textarea
                className='Form-area'
                id='textArea'
                name='textArea'
                placeholder='Cut onions for the lunch'
                cols={50}
                rows={15} ></textarea >
            <div>
                <button 
                    className='Form-button Form-button--isCancel'
                    onClick={onCancel} 
                    type='button'>Cancelar</button>
                <button 
                    className='Form-button Form-button--isSubmit'
                    type='submit'>Guardar</button>
            </div>
        </form>
    );
}

export {CreateForm}