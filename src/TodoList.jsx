import React from 'react';


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
                todoList.map(item => <li key={item.id}> { item.title}</li>)
                }
           </ul>
        </div>
    );
}

export default TodoList;