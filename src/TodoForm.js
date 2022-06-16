import { useState } from "react";

function TodoForm({addTask}) {

  const [userInput, setUserInput] = useState('')

  const handleInput = (e) => {
    setUserInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput("")
    
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input 
          className="inputTodo" 
          type="text" 
          value={userInput} 
          onChange={handleInput} 
          placeholder="What needs to be done" />
        <button className="inputBtn">Add todo</button>
      </form>
    </div>
  )
}

export default TodoForm;