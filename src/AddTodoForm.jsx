import React from "react";


function AddTodoForm(props){

    
const handleAddTodo= (event)  => {

    event.preventDefault();

    const todoTitle = event.target.elements.title.value;

    props.onAddTodo(todoTitle);

    // Reset the form
    event.target.reset();
};

    return(
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle" title="Tiltle"></label>
                <input type="text" id="todoTitle" name="title" placeholder="Enter todo title" required></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm