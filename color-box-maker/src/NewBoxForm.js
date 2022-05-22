import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewBoxForm.css";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    color: "",
    width: "5",
    height: "5",
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
    createBox({ ...formData, id: uuid() });
    setFormData({ color: "", width: "5", height: "5" });
  };

  return (
    <div>
      <form className="NewBoxForm" onSubmit={gatherInput}>
        <div>
          <label htmlFor="color">Color</label>
          <input
            className="NewBoxForm-input"
            onChange={handleChange}
            type="text"
            name="color"
            value={formData.color}
            id="color"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            className="NewBoxForm-input"
            onChange={handleChange}
            type="number"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            className="NewBoxForm-input"
            onChange={handleChange}
            type="number"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <button className="NewBoxForm-btn">Add Box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
