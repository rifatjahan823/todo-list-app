import React, { useState } from 'react';
import '../styles/TodoItem.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";

function TodoItem({ task, deleteTask, toggleTaskCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleToggleCompletion = () => {
    toggleTaskCompletion(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editTask(task.id, { ...task, name: editedTaskName });
    setIsEditing(false);
  };

  const priorityClass = `priority-${task.priority}`; 
  const taskClassName = `todo_item ${task.completed ? 'completed' : ''} ${priorityClass}`;

  return (
    <div className={taskClassName}>
      <div className='d-block w-100'>
        {
          !isEditing &&
          <input 
            className='me-2 edit_checkbox'
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleCompletion}
          />
        }
        <span className={task.completed ? 'completed-text' : ''}>{task.name}</span>
      </div>
      <div className="buttons d-flex ">
        {!isEditing && (
          <>
            <div onClick={handleEdit}><FaEdit /></div>
            <div onClick={handleDelete}><MdDelete /></div>
          </>
        )}
      </div>
      {isEditing && (
        <div className="" onClick={handleSaveEdit}>
          <FaSave className='save_icon'/>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
