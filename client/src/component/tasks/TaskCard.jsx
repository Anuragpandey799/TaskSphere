import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColors = {
    Pending: "#f59e0b",
    "In Progress": "#3b82f6",
    Completed: "#10b981",
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ margin: 0 }}>{task.title}</h3>
        <p style={{ margin: "4px 0" }}>{task.description}</p>
        <span
          style={{
            padding: "4px 8px",
            borderRadius: "4px",
            backgroundColor: statusColors[task.status],
            color: "#fff",
            fontSize: "12px",
          }}
        >
          {task.status}
        </span>
      </div>

      <div>
        <button
          onClick={() => onEdit(task)}
          style={{
            marginRight: "8px",
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#3b82f6",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#ef4444",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
