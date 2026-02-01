import { useEffect, useState } from "react";
import MainLayout from "../component/layout/MainLayout";
import TaskForm from "../component/tasks/TaskForm";
import TaskList from "../component/tasks/TaskList";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/task.service";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [viewTask, setViewTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  const handleAddTask = async (task) => {
    const res = await createTask(task);
    setTasks([res.data, ...tasks]);
  };

  const handleUpdateTask = async (task) => {
    const res = await updateTask(task._id, task);
    setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
    setEditingTask(null);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-6">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Task Dashboard 🚀
              </h1>
              <p className="text-gray-300 mt-1">
                Manage your tasks with clarity and focus
              </p>
            </div>

            {/* Stats Card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-xl px-5 py-3 text-white">
              <p className="text-sm text-gray-300">Total Tasks</p>
              <p className="text-2xl font-bold">{tasks.length}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task Form Panel */}
          <div className="lg:col-span-1 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              {editingTask ? "Edit Task ✏️" : "Create New Task ➕"}
            </h2>

            <TaskForm
              onSubmit={editingTask ? handleUpdateTask : handleAddTask}
              initialData={editingTask}
              onCancel={() => setEditingTask(null)}
            />
          </div>

          {/* Task List Panel */}
          <div className="lg:col-span-2 backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Your Tasks</h2>
              <button
                onClick={loadTasks}
                className="text-sm text-cyan-400 hover:underline"
              >
                Refresh
              </button>
            </div>

            <TaskList
              tasks={tasks}
              onEdit={setEditingTask}
              onDelete={handleDeleteTask}
              onRead={setViewTask}
            />
          </div>
        </div>
      </div>

      {/* modal to view task */}
      {viewTask && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-auto"
          onClick={() => setViewTask(null)}
        >
          <div
            className="
        relative 
        bg-gray-900/90 backdrop-blur-lg border border-white/20 
        rounded-3xl shadow-2xl max-w-3xl w-full md:w-2/3 lg:w-1/2 p-6 md:p-8
        animate-fade-in
        text-white
      "
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setViewTask(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition"
            >
              ✖
            </button>

            {/* Task Title */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 truncate">
              {viewTask.title}
            </h2>

            {/* Task Description */}
            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed text-sm md:text-base">
                {viewTask.description}
              </p>
            </div>

            {/* Status Badge */}
            <div className="mt-6 text-sm text-gray-400 flex items-center gap-2">
              <span>Status:</span>
              <span
                className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${
              viewTask.status === "Pending"
                ? "bg-yellow-500 text-white"
                : viewTask.status === "In Progress"
                  ? "bg-blue-500 text-white"
                  : "bg-green-500 text-white"
            }
          `}
              >
                {viewTask.status}
              </span>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Dashboard;
