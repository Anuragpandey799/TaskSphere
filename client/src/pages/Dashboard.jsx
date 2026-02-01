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
      <h1>Dashboard</h1>
      <TaskForm
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        initialData={editingTask}
        onCancel={() => setEditingTask(null)}
      />
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDeleteTask}
      />
    </MainLayout>
  );
};

export default Dashboard;
