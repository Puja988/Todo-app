import React from 'react';
import "./Todo.css"

const Todo = ({title, description}) => {
    return (
        <div className="Todo">
            <p>{title}</p>
        </div>
    )
}

export default Todo
