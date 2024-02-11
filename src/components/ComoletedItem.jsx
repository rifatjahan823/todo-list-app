import React from 'react';
import { Accordion } from 'react-bootstrap';
import TodoItem from './TodoItem';
import '../styles/ComoletedItem.css'

const ComoletedItem = ({ completedTasks, deleteTask, toggleTaskCompletion, editTask }) => {

    return (
        <div className='completed_task'>
            <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Completed Tasks</Accordion.Header>
          <Accordion.Body>
            {completedTasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
                editTask={editTask}
              />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        </div>
    );
};

export default ComoletedItem;
