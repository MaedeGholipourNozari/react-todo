import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'


function App() {
  const [newTodo , setNewTodo ] = useState("")
  const [todoList, setTodoList] = useState([]);


   // Function to add a new todo
   const addTodo = (newTodo) => {

    setTodoList([...todoList, { title: newTodo.title }]);
  };

  return (
    <>
      <h1>Todo List</h1>
      
      <AddTodoForm onAddTodo={addTodo}/>
    

      <TodoList todoList={todoList}/>
    </>
  )
}

export default App
