import React from "react";

import "./new-task-form.css";

const NewPanel = () => {
  return (
    <input
      type="text"
      className="form-control new-input"
      placeholder="What need to be done?"
      autoFocus
    />
  );
};

export default NewPanel;
