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
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label className="block text-gray-300 mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg p-2 outline-none"
        >
          <option className="bg-gray-900">Pending</option>
          <option className="bg-gray-900">In Progress</option>
          <option className="bg-gray-900">Completed</option>
        </select>
      </div>

      <div className="flex gap-3 mt-4">
        <Button
          type="submit"
          className="bg-gradient from-purple-500 to-blue-500 hover:opacity-90 text-white py-2 px-4 rounded-lg transition"
        >
          {initialData ? "Update" : "Add"} Task
        </Button>

        {onCancel && (
          <Button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition"
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
