import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Todo = (props) => {
    let { todo, toggleComplete, deleteTodo, editTodo } = props;
    return(
        <div className="Todo">
            <p onClick={()=>toggleComplete(todo.id)} className={todo.completed ? 'completed': ''}>{todo.task}</p>
            <div>
                <FontAwesomeIcon onClick={()=>editTodo(todo.id)} icon={faPenToSquare} />
                <FontAwesomeIcon onClick={()=>deleteTodo(todo.id)} icon={faTrash} />
            </div>
        </div>
    )
}
