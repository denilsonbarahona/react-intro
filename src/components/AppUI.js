import React from "react";
import {TodoCounter} from './TodoCounter';
import {TodoContext} from '../TodoContext';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './createtodobutton';
import {Modal} from './Modal';
import {CreateForm} from './CreateTodoForm';
import {Skeleton} from './SkeletonItem';


function AppUI(){
    const {openModal} = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch/>
            <TodoContext.Consumer>
                {({
                    loading, 
                    error, 
                    searchedTodos, 
                    onDelete, 
                    onComplete
                })=>(
                    <TodoList>

                        {loading && 
                            <TodoList>
                                <Skeleton/>
                                <Skeleton/>
                            </TodoList>}
                        {(!loading && error) && <p>Desesperate, !hubó un error! XD...</p>}
                        {(!loading && !error && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}
        
        
                        {searchedTodos.map((todo, i)=>(
                            <TodoItem 
                                key={i}  
                                onComplete={onComplete} 
                                onDelete={onDelete}            
                                completed={todo.completed} 
                                text={todo.text}/>
                        )) }
                    </TodoList>
                ) }
            </TodoContext.Consumer>
            {openModal && (
                <Modal>
                    {/* <p>HOLA MUNDO!!!!!!, que dificil que sos</p> */}
                    <CreateForm />
                </Modal>            
            )}
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};
