import React from "react";

const statusStyles = {
  Pending: "bg-yellow-500",
  "In Progress": "bg-blue-500",
  Completed: "bg-green-500",
};

const TaskCard = ({ task, onEdit, onDelete, onRead }) => {
  return (
    <div className="
      flex flex-col justify-between 
      backdrop-blur-lg bg-white/10 border border-white/20 
      rounded-xl p-4 min-h-[140px] max-h-[220px] 
      transition hover:shadow-2xl hover:scale-105
      w-full
    ">
      {/* TOP: Title + Status + Description */}
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg truncate">
          {task.title || "Untitled Task"}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3 mt-1 overflow-auto">
          {task.description || "No description provided."}
        </p>

        {/* Status Badge */}
        <span className={`inline-block mt-2 text-xs text-white px-2 py-1 rounded-md ${
          statusStyles[task.status] || "bg-gray-500"
        }`}>
          {task.status}
        </span>
      </div>

      {/* BOTTOM: Buttons */}
      <div className="flex justify-between items-center mt-3 flex-shrink-0 gap-2">
        <button
          onClick={() => onRead(task)}
          className="flex-1 text-sm text-cyan-400 hover:underline truncate"
        >
          Read →
        </button>

        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition flex-shrink-0"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg transition flex-shrink-0"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
