import React from "react";


function AddTodoForm(){
    return(
        <div>
            <form>
                <label htmlFor="todoTitle" title="Tiltle"></label>
                <input type="text" id="todoTitle"></input>
                <button type="submit" >Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm