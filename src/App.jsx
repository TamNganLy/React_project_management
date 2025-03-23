import { useRef, useState } from "react";
import AddProject from "./components/AddProject";
import Main from "./components/Main";
import ProjectList from "./components/ProjectList";
import { projectsData } from "./data";
import ProjectDetail from "./components/ProjectDetail";

// let initialProjects = [
//   {
//     title: null,
//     description: null,
//     due: null,
//   },
// ];

let initialProjects = [
  {
    title: "Learning React",
    description:
      "Learn React from the group up.\n\nStart with the basics, finish with advanced knowledge.",
    due: "2025-04-01",
    tasks: ["Learn the basics"],
  },
  {
    title: "Mastering React",
    description: "Testing 2 lines\n1 line\n2 line",
    due: "2025-04-05",
    tasks: [],
  },
];

function App() {
  const [status, setStatus] = useState(0);
  const [projects, setProjects] = useState(initialProjects);
  // const index = useRef();
  const [indexProj, setIndexProj] = useState(0);

  // console.log(projects);

  function handleClick(value) {
    setStatus((pre) => value);
    // console.log(status);
  }

  function addProject(newValue) {
    setProjects((prevProjects) => {
      if (prevProjects.length <= 0) {
        return [newValue];
      } else {
        return [...prevProjects, newValue];
      }
    });
  }

  function addTask(newValue) {
    setProjects((prevProjects) => 
      prevProjects.map((project, index) =>
        index === indexProj
          ? {
              ...project,
              tasks: project.tasks.length === 0 
                ? [newValue]
                : [...project.tasks, newValue]
            }
          : project
      )
    );
  }

  // {!isClick && <Main OnClick={handleClick} />}
  //     {isClick && <AddProject OnCancelClick={handleClick} OnSaveClick={addProject} />}

  function handleListClick(selectedIndex) {
    setIndexProj((pre) => selectedIndex);
    handleClick(2);
  }

  function deleteProject() {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== indexProj));
    // console.log(index);
    handleClick(0);
  }

  function deleteTask(idT) {
    setProjects((prevP) =>
      prevP.map((project, index) =>
        index === indexProj
          ? { ...project, tasks: project.tasks.filter((_, i) => i !== idT) }
          : project
      )
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectList
        ref={indexProj}
        OnClick={() => handleClick(1)}
        projects={projects}
        OnListClick={handleListClick}
      />
      {status === 0 ? (
        <Main OnClick={() => handleClick(1)} />
      ) : status === 1 ? (
        <AddProject
          OnCancelClick={() => handleClick(0)}
          OnSaveClick={addProject}
        />
      ) : (
        <ProjectDetail
          project={projects[indexProj]}
          OnDelete={() => deleteProject(indexProj)}
          OnDeleteTask={deleteTask}
          OnSaveTask={addTask}
        />
      )}
    </main>
  );
}

export default App;
