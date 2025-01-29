import React from 'react';
import TodoListItem from './TodoListItem';
import style from "./TodoListItem.module.css";


//const todoList=[
 //   {
 //     id: 1,
  //    title: "Complete assignment"
  //  },
   // {
  //    id: 2,
  //    title: "Read React documentation"
  //  },
  //  {
   //   id: 3,
  //    title: "Practice coding exercises"
   // }
 // ];

 const TodoList = ({ todoList,onremoveTodo }) => {
    return (
      <div>
        <ul className={style.TodoList}>
        {
                  todoList.map(item =>
                    (<TodoListItem key={item.id} todo={item} onRemoveTodo={onremoveTodo}></TodoListItem>)  
                  )
                  }
        </ul>
    </div>
    );
}

export default TodoList;