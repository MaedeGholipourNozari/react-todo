import React from "react";
import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from "./TodoListItem.module.css";
import PropTypes from 'prop-types';


function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = useState("");
    
    const handleTitleChange = (event) => {
        const newTodoTitle= event.target.value;
        setTodoTitle(newTodoTitle); 
      };

    const handleAddTodo= (event)  => {

        event.preventDefault();

        const newTodo = {
            title: todoTitle,
            id: Date.now().toString(), 
          }; 
        onAddTodo(newTodo);

        setTodoTitle(''); 
    };

    return(
        <div className={style.addTodoContainer}>
        <form onSubmit={handleAddTodo} className={style.addTodoForm}>
          <InputWithLabel 
            value={todoTitle}
            onChange={handleTitleChange}
          >
            Title:
          </InputWithLabel>
          <button type="submit" className={style.addTodoButton}>Add</button>
        </form>
      </div>
      
    );
} 

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
};


export default AddTodoForm