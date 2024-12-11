import React from "react";
import { useState } from 'react'

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
            id: Date.now(), 
          }; 
        onAddTodo(newTodo);

        setTodoTitle(''); 
    };

    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" title="Tiltle"></label>
                <input type="text" id="todoTitle" value={todoTitle} onChange={handleTitleChange} name="title" placeholder="Enter todo title" required></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    );
} 

export default AddTodoForm