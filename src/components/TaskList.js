import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length > 0 ? tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      )) : <p className="no-tasks">No tasks yet!</p>}
    </ul>
  );
}

export default TaskList;
