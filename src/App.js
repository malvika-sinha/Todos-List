import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Footer from './components/Footer';  // Import Footer component

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const sortTasks = (type) => {
    const sortedTasks = [...tasks];
    if (type === 'alphabetical') {
      sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
    } 
    setTasks(sortedTasks);
  };
   
  return (
    <div className="app-container" id='container1'>
      <h1 className="title">To-Do List</h1>
      <TaskInput addTask={addTask} />
      <div className="sorting">
        <button onClick={() => sortTasks('alphabetical')} className='sort-button'>
          Sort Alphabetically
        </button>
      </div>
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
      
      {/* Add the Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
