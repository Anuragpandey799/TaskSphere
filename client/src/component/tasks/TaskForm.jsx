import React, { useState, useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";

const TaskForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", description: "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <div style={{ marginBottom: "12px" }}>
        <label>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button type="submit">{initialData ? "Update" : "Add"} Task</Button>
        {onCancel && (
          <Button
            type="button"
            onClick={onCancel}
            style={{ backgroundColor: "#6b7280" }}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
