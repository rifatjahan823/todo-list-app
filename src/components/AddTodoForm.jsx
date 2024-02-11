import { v4 as uuidv4 } from "uuid";
import { Form, Button, Offcanvas, Row, Col } from "react-bootstrap";
import TodoList from "./TodoList";
import FilterOptions from "./ui/FilterOptions";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/AddTodoForm.css";

const AddTodoForm = ({
  addTask,
  tasks,
  deleteTask,
  toggleTaskCompletion,
  editTask,
}) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("low");
  const [showPriorityMenu, setShowPriorityMenu] = useState(false);
  const [filter, setFilter] = useState("all");
  const totalTasks = tasks?.length;
  const completedTasks = tasks?.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
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
        <Col lg={2}  className="d-lg-block d-none ">
        <div className="sidebar ">
        <RxHamburgerMenu
          className=" d-lg-block d-md-none"
            style={{ fontSize: "25px", marginLeft: "24px" }}
            onClick={() => setShowPriorityMenu(true)}
          />
          <Offcanvas
            responsive="lg"
            show={showPriorityMenu}
            onHide={() => setShowPriorityMenu(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Select Priority</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="priority">
                <p
                  className={priority === "low" ? "active" : ""}
                  onClick={() => handlePriorityClick("low")}
                >
                  Low
                </p>
                <p
                  className={priority === "medium" ? "active" : ""}
                  onClick={() => handlePriorityClick("medium")}
                >
                  Medium
                </p>
                <p
                  className={priority === "high" ? "active" : ""}
                  onClick={() => handlePriorityClick("high")}
                >
                  High
                </p>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        </Col>
        <Col lg={10} md={12} >
         <div className="add_to_form_right ">
         <Form onSubmit={handleSubmit} className="form_section">
            <Form.Group controlId="taskNameInput">
              <div className="d-flex justify-content-between flex-wrap align-items-center mb-3">
              <RxHamburgerMenu className=" d-lg-none d-md-block"
            style={{ fontSize: "25px", marginLeft: "24px" }}
            onClick={() => setShowPriorityMenu(true)}
          />
                <Form.Label className="fw-bold text-capitalize mb-0">
                  {priority}
                </Form.Label>
                <div className='d-flex align-items-center'>
                  <p className='fw-bold me-3 mb-0'>Total: {totalTasks}</p>
                  <p className='fw-bold mb-0'>Completed: {completedTasks}</p>
                </div>
                <FilterOptions setFilter={setFilter} />
              </div>
              <div className="task-input-area">
              <Form.Control
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
               <Button type="submit">Add</Button>
              </div>
            </Form.Group>
          </Form>
          <TodoList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
            editTask={editTask}
          />
         </div>
        </Col>
      </Row>
    </>
  );
};

export default AddTodoForm;
