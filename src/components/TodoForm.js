import React, { useState } from "react";

export const TodoForm = (props) => {
    let {addTodo} = props;
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
          }
    };
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task for today?" value={value} onChange={(e)=>setValue(e.target.value)}></input>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}