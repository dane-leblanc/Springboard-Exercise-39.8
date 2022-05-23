import React from "react";
import "./Todo.css";

function todo({ id, handleRemove, task }) {
  const remove = () => handleRemove(id);
  return (
    <div className="Todo">
      <span>
        {task}
        <button className="Todo-btn" onClick={remove}>
          X
        </button>
      </span>
    </div>
  );
}

export default todo;
