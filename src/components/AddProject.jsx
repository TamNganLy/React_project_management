import { useState } from "react";

export default function AddProject({ OnCancelClick, OnSaveClick}) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    due: "",
    tasks: [],
  });

  function handleChange(name, value) {
    setProject((preP) => {
      return {
        ...preP,
        [name]: value,
      };
    });
  }

  function handleClick() {
    if (project.title && project.description && project.due) {
      OnSaveClick(project);
    }
    OnCancelClick();
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          onClick={OnCancelClick}
          className="text-stone-800 hover:text-stone-950"
        >
          Cancel
        </button>
        <button
          onClick={handleClick}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </menu>
      <span>
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
          <input
            value={project.title}
            onChange={(event) => handleChange("title", event.target.value)}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </label>
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
          <textarea
            type="text"
            value={project.description}
            onChange={(event) => handleChange("description", event.target.value)}
            rows="3"
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </label>
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
          <input
            type="date"
            value={project.due}
            onChange={(event) => handleChange("due", event.target.value)}
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          />
        </label>
      </span>
    </div>
  );
}
