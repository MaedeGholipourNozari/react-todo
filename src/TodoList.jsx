import React from 'react';
import TodoListItem from './TodoListItem';


const todoList=[
    {
      id: 1,
      title: "Complete assignment"
    },
    {
      id: 2,
      title: "Read React documentation"
    },
    {
      id: 3,
      title: "Practice coding exercises"
    }
  ];

function TodoList() {
    return (
        <div>
           <ul>
                {
                todoList.map(item =>
                  (<TodoListItem key={item.id} todo={item}></TodoListItem>)  
                )
                }
           </ul>
        </div>
    );
}

export default TodoList;