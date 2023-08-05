import React, { useState, useRef, useEffect } from "react";

export const EditTodo = (props) => {
    let {editTask, todo} = props;
    const [value, setValue] = useState(todo.task);
    const inputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            editTask(value, todo.id);
            setValue('');
          }
    };
    useEffect(()=>{
        inputRef.current.focus();
    }, []);
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="todo-input" placeholder={`Your old task(${todo.task})`} value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <button type="submit" className="todo-btn">Update</button>
        </form>
    )
}