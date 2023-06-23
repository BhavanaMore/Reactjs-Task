import React from "react";

const TaskItem = ({ task, onDeleteTask, onMarkComplete }) => {
  const { id, name, description, dueDate, completed } = task;

  const handleDelete = () => {
    onDeleteTask(id);
  };

  const handleMarkComplete = () => {
    onMarkComplete(id);
  };

  return (
    <tr className={`task-item ${completed ? "completed" : ""}`}>
      <td>{name}</td>
      <td>{description}</td>
      <td>{dueDate}</td>
      <td>
        <div className="task-item-actions">
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleMarkComplete}
          />
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;
