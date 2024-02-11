import React from 'react';
import ComoletedItem from './ComoletedItem';
import TodoItem from './TodoItem';


const TodoList = ({ tasks, deleteTask, toggleTaskCompletion, editTask }) => {
  const sortedTasks = tasks.sort((a, b) => a.priority.localeCompare(b.priority));

  const completedTasks = sortedTasks.filter(task => task.completed);
  const notCompletedTasks=sortedTasks.filter(task => !task.completed)

  return (
    <div className="todo-list">
         <div className="todo-list">
        {notCompletedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        ))}
      </div>
      {completedTasks.length > 0 && (
        <ComoletedItem
          completedTasks={completedTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
        />
      )}
    </div>
  );
};

export default TodoList;
