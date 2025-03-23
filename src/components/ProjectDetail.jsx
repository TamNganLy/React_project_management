import Task from "./Task";

export default function ProjectDetail({ project, OnDelete, OnDeleteTask, OnSaveTask }) {

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-stone-700 mb-4">
            {project.title}
          </h2>
          <button onClick={OnDelete}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{project.due}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Task project={project} OnDelete={OnDeleteTask} OnSaveTask={OnSaveTask}/>
    </div>
  );
}