import { v4 as uuidv4 } from "uuid";
import { Form, Button, Offcanvas, Row, Col } from "react-bootstrap";
import TodoList from "./TodoList";
import FilterOptions from "./ui/FilterOptions";
import { useState } from "react";


const AddTodoForm = ({ addTask, tasks, deleteTask, toggleTaskCompletion, editTask }) => {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("low"); // Default priority
    const [showPriorityMenu, setShowPriorityMenu] = useState(false);
    const [filter, setFilter] = useState('all');
  
    const filteredTasks = tasks.filter(task => {
      if (filter === 'all') return true;
      return task.priority === filter;
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!taskName.trim()) return;
      const newTask = {
        id: uuidv4(),
        name: taskName,
        completed: false,
        priority: priority, 
      };
      addTask(newTask);
      setTaskName("");
      setPriority("low");
    };
  
    const handlePriorityClick = (selectedPriority) => {
      setPriority(selectedPriority);
      setShowPriorityMenu(false); 
    };
  return (
    <>
      <Row>
        <Col xs={3} style={{ height: "100vh" }}>
          <Button variant="primary" onClick={() => setShowPriorityMenu(true)}>
            Select Priority
          </Button>
          <Offcanvas
            responsive="lg"
            show={showPriorityMenu}
            onHide={() => setShowPriorityMenu(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Priority</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <p onClick={() => handlePriorityClick("low")}>Low</p>
                <p onClick={() => handlePriorityClick("medium")}>Medium</p>
                <p onClick={() => handlePriorityClick("high")}>High</p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
        <Col xs={9}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskNameInput">
              <div className="d-flex justify-content-between flex-wrap">
                <Form.Label>{priority}</Form.Label>

                <FilterOptions setFilter={setFilter} />
              </div>

              <Form.Control
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Add Task</Button>
          </Form>
          <TodoList
            tasks={filteredTasks} // Pass filteredTasks instead of tasks
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddTodoForm;
