import React, { useState } from "react";
import "../styles/TodoItem.css";
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
  const taskClassName = `todo_item ${
    task.completed ? "completed" : ""
  } ${priorityClass}`;

  return (
    <div className={taskClassName}>
      <div className="d-flex w-75  align-items-top">
        {!isEditing && (
          <div class="form-check ">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
              checked={task.completed}
              onChange={handleToggleCompletion}
            />
          </div>
        )}
        {isEditing ? (
          <input
            className="edit_input w-100 border-0 "
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
        ) : (
          <span
            className={`${
              task.completed ? "completed-text" : ""
            } mb-2 p-0 text-wrap`}
          >
            {task.name}
          </span>
        )}
      </div>
      <div className="buttons d-flex ">
        {!isEditing && (
          <>
            <div className="edit_icon" onClick={handleEdit}>
              <FaEdit />
            </div>
            <div className="delete_icon" onClick={handleDelete}>
              <MdDelete />
            </div>
          </>
        )}
      </div>
      {isEditing && (
        <div className="" onClick={handleSaveEdit}>
          <FaSave className="save_icon" />
        </div>
      )}
    </div>
  );
}

export default TodoItem;
