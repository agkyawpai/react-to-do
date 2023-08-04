import React from "react";

export const TodoForm = () => {
    return(
        <div className="TodoForm">
            <input type="text" className="todo-input" placeholder="What is the task for today?"></input>
            <button type="submit" className="todo-btn">Add Task</button>
        </div>
    )
}