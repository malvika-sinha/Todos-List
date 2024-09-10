import React from 'react';

function TaskItem({ task, updateTaskStatus, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => updateTaskStatus(task.id)} className="task-text">
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
    </li>
  );
}

export default TaskItem;
