import React from 'react'


const TodoListItem = (props) => {
    const { todo } = props; // Destructure the todo object from props
  
    return (
      <li>
        <h3>{todo.title}</h3>
      </li>
    );
  };

export default TodoListItem