import React from 'react'


const TodoListItem = ({ todo,onRemoveTodo }) => {
   
    return (
      <li className="todo-list-item">
        <h3 className="todo-title">{todo.title}</h3>
        <button
          type="button"
          className="remove-button"
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </button>
     </li>
    );
  };

export default TodoListItem