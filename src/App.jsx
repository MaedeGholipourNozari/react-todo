import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList.jsx'
import AddTodoForm from './AddTodoForm.jsx'

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("savedTodoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {
  const [newTodo , setNewTodo ] = useState("")
  const [todoList, setTodoList] = useSemiPersistentState();

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
