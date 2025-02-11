import React from 'react'
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';


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
  TodoListItem.propTypes = {
    todo: PropTypes.func,
    onRemoveTodo: PropTypes.func,
};
export default TodoListItem