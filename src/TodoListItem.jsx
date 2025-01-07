import React from 'react'


const TodoListItem = ({ todo,onRemoveTodo }) => {
   
    return (
      <li>
        <h3>{todo.title}</h3>
        <button type="button" onClick={() => onRemoveTodo(todo.id)}>
            Remove
          </button>
      </li>
    );
  };

export default TodoListItem