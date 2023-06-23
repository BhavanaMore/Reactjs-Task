import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isAddTaskPopupOpen, setAddTaskPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      name,
      description,
      dueDate,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setAddTaskPopupOpen(false);
    setName("");
    setDescription("");
    setDueDate("");
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  const handleMarkComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <button
        className="add-task-button"
        onClick={() => setAddTaskPopupOpen(true)}
      >
        Add Task
      </button>
      {isAddTaskPopupOpen && (
        <div className="add-task-popup">
          <div className="add-task-popup-content">
            <h2>Add Task</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
            <button className="add-task-submit" onClick={handleAddTask}>
              Add Task
            </button>
            <button
              className="add-task-cancel"
              onClick={() => setAddTaskPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table className="task-list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <TaskList
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onMarkComplete={handleMarkComplete}
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
