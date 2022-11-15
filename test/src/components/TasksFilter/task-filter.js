import React from "react";

import "./task-filter.css";

const ItemStatusFilter = () => {
  return (
    <ul className="btn-group">
      <li>
        <button type="button" className="btn">
          All
        </button>
      </li>
      <li>
        <button type="button" className="btn btn-outline-secondary">
          Active
        </button>
      </li>
      <li>
        {" "}
        <button type="button" className="btn btn-outline-secondary">
          Done
        </button>{" "}
      </li>
    </ul>
  );
};

export default ItemStatusFilter;
