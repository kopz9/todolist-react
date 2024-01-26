import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");   
      return;   
    }
    alert('Campo tarefa vazio')
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return(
  <div className='todo-list'>
    <h1>To-Do List</h1>
    
    <div>
      <input 
      type="text" 
      placeholder='Digite sua tarefa...' 
      value={newTask}
      onChange={handleInputChange}
      />
      <button className='add-button'
      onClick={addTask}>
        Adicionar
      </button>
    </div>

    <ol>
      {tasks.map((task, index) => 
      <li key={index}><span className='text'>{task}</span>
      <button 
      className='delete-button'
       onClick={() => deleteTask(index)}>
        Deletar
      </button>
      
      
      </li>
      )}
    </ol>

  </div>)

}

export default TodoList