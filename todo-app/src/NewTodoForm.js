import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTodoForm({ add }) {
  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const gatherInput = (e) => {
    e.preventDefault();
    add({ ...formData, id: uuid() });
    setFormData({ task: "" });
  };
  return (
    <div>
      <form className="NewTodoForm" onSubmit={gatherInput}>
        <div>
          <label htmlFor="task">Add todo item:</label>
          <input
            onChange={handleChange}
            type="text"
            name="task"
            id="task"
            value={formData.task}
          />
        </div>
      </form>
    </div>
  );
}

export default NewTodoForm;
