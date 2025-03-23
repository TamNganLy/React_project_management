import NewTask from "./NewTask";

export default function Task({ project, OnDelete, OnSaveTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask project={project} OnSaveTask={OnSaveTask}/>
      {project.tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task, index) => {
            return (
              <li key={index} className="flex justify-between my-4">
                <span>{task}</span>
                <button
                  onClick={() => OnDelete(index)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
