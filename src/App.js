import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

import './App.css';

function App() {
  const [todos, setTodos] = useState([]) 
  

  const addTask = (userInput) => {
    if(userInput){
      const newTask = {
        id: Math.random().toString(36).substring(2,9),
        task: userInput,
        complate: false
      }
      setTodos([...todos, newTask])
    } 
  }

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const toggleTask = (id) => {
    setTodos([
      ...todos.map((todo) => 
        todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
      )
    ])
  }
  

  return (
    <div className="App">
      <div className="todoContent">
        <TodoForm addTask={addTask}/>
        
         
        {
          todos.length ?
          todos.map(todo => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              toggleTask={toggleTask} 
              removeTask={removeTask}  
              />
          ))
          : <h3>No Todo</h3>  
        }
        {
          todos.length ? 
            <div>
              <h3 className="todoCounter">All todo: {todos.length}</h3>
              <h3 className="todoCounter">Complated todo: {todos.filter(item => item.complete === true).length}</h3>
            </div>
            : ''
        }
        
        
      </div>
        
    </div>
  );
}

export default App;
