import React from 'react'
import style from "./TodoListItem.module.css";


const TodoListItem = ({ todo,onRemoveTodo }) => {
   
    return (
      <li  className={style.ListItem}>
        <h3 className={style.todoTitle}>{todo.title}</h3>
        <button
          type="button"
          className={style.removeButton}
          onClick={() => onRemoveTodo(todo.id)}
        >
          Remove
        </button>
     </li>
    );
  };

export default TodoListItem