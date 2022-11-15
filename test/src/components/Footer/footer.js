import React from "react";
import "./footer.css";

import ItemStatusFilter from "../TasksFilter/task-filter";

const Footer = () => {
  return (
    <div className="footer">
      <span className="todo-count">1 items left</span>
      <ItemStatusFilter />
      <span className="Clear">Clear completed</span>
    </div>
  );
};

export default Footer;
