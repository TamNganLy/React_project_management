export default function Projects({ projects, OnListClick }) {
  function handleClick(value) {
    OnListClick(value);
  }

  return (
    // <ul className="mt-8">
    //   <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
    //     Learning React
    //   </button>
    //   <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
    //     Mastering React
    //   </button>
    // </ul>

    <ul className="mt-8">
      {projects.map((project, index) => {
        return (
          <button
            onClick={()=>handleClick(index)}
            key={index}
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            {project.title}
          </button>
        );
      })}
    </ul>
  );
}
