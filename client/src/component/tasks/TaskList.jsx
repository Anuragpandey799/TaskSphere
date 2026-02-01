import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete ,onRead}) => {
  if (!tasks.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8">
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 max-w-md">
          <h3 className="text-xl font-semibold text-white mb-2">
            No Tasks Yet ✨
          </h3>
          <p className="text-gray-300">
            Create your first task using the form on the left.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-1 
        xl:grid-cols-2 
        gap-4
        animate-fade-in
      "
    >
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
           onRead={onRead}
        />
      ))}
    </div>
  );
};

export default TaskList;
