import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDeleteTask, onMarkComplete }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </>
  );
};

export default TaskList;
