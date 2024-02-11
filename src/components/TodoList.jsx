import React, { useState } from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
    const [filter, setFilter] = useState('all');

  
    const filteredTasks = tasks?.filter(task => {
      if (filter === 'all') return true;
      return task.priority === filter;
    });
  
    // Sort tasks so that completed tasks come last
    const sortedTasks = [...filteredTasks].sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });
    return (

        <div className="todo-list">
        {sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))}
      </div>
    );
};

export default TodoList;