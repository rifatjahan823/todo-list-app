import React, { useEffect, useState } from 'react';
import AddTodoForm from './AddTodoForm';
import { Container } from 'react-bootstrap';

const TodoApp = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        return storedTasks || [];
      });
    
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]); 
    
      const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
      };
    
      const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
      };
    
      const toggleTaskCompletion = (taskId) => {
        setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
          )
        );
      };
    
      const editTask = (taskId, updatedTask) => {
        setTasks(
          tasks.map((task) => (task.id === taskId ? updatedTask : task))
        );
      };
    return (
        <Container fluid>
        <AddTodoForm addTask={addTask}  tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}/>
          </Container>
    );
};

export default TodoApp;