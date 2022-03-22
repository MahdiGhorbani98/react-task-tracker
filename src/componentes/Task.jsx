import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ tasks, onDelete, onToggle }) => {
  const onDeleteIcon = () => {
    onDelete(tasks.id);
  };
  const onToggleDiv = () => {
    onToggle(tasks.id);
  };
  return (
    <div
      className={`task ${tasks.reminder && "reminder"}`}
      onDoubleClick={onToggleDiv}
    >
      <h3>
        {tasks.text} <FaTimes onClick={onDeleteIcon} style={{ color: "red" }} />{" "}
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
};

export default Task;
