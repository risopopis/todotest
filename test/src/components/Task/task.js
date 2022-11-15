import React from "react";

import "./task.css";

const TodoListItem = ({ label }) => {
  return (
    <span className="todo-list-item">
      <input className="toggle" type="checkbox" />
      <span className="todo-list-item-label">{label}</span>
      <button type="button" className="btn icon icon-edit"></button>
      <button type="button" className="btn icon icon-destroy"></button>
    </span>
  );
};

export default TodoListItem;
