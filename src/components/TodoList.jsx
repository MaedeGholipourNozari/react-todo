import React from 'react';
import TodoListItem from './TodoListItem';
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';


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
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdTime: PropTypes.string,
    })
  ).isRequired,
  onremoveTodo: PropTypes.func.isRequired,
};

export default TodoList;