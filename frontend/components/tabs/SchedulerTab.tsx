// frontend/components/tabs/SchedulerTab.tsx

import { useEffect, useState } from "react";
import { apiGet, apiPost } from "@/lib/api";

interface Task {
  id: number;
  title: string;
  scheduledFor: string;
}

export default function SchedulerTab() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");

  async function loadTasks() {
    try {
      const data = await apiGet<Task[]>("scheduler");
      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }

  async function addTask() {
    if (!newTask || !newDate) return;
    try {
      const task = await apiPost<Task>("scheduler", {
        title: newTask,
        scheduledFor: newDate,
      });
      setTasks((prev) => [...prev, task]);
      setNewTask("");
      setNewDate("");
    } catch (err) {
      console.error(err);
      setError("❌ Failed to add task");
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) return <p className="p-4">Loading scheduler...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Task title"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="datetime-local"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          ➕ Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border rounded p-3 shadow-sm flex justify-between"
          >
            <span>{task.title}</span>
            <span className="text-sm text-gray-500">
              {new Date(task.scheduledFor).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}