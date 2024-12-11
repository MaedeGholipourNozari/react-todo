import React from 'react'


const TodoListItem = ({ todo }) => {
   
    return (
      <li>
        <h3>{todo.title}</h3>
      </li>
    );
  };

export default TodoListItem