import { useState } from "react";

export default function NewTask({ OnSaveTask }) {
  const [task, setTask] = useState("");

  function addTask() {
    OnSaveTask(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={task}
        onChange={(event) => setTask(event.target.value)}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={addTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
