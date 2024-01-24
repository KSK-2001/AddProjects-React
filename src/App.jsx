import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectProject from "./components/SelectProject";

function App() {
  const [ProjectSelected,SetProjectSelected]=useState({
    projectid: undefined,
    projects : [],
    tasks : []
  });
  function handleAddTask(text){
    SetProjectSelected(prev =>{
      const newTask = {
        text : text,
        projectid : prev.projectid,
        id: Math.random()
      }
      return {
        ...prev,
        tasks: [newTask,...prev.tasks]
      }
    })
  }
  function handleDeleteTask(id){
    SetProjectSelected(prev =>{
      return{
        ...prev,
        tasks : prev.tasks.filter((task)=>
          task.id !== id
        )
      }
    })
  }
  function handleStartProject(){
    SetProjectSelected((prev) => {
          return {
            ...prev,
            projectid: null,
          }
    })
  };
  function handleCancel(){
    SetProjectSelected(prev =>{
      return{
        ...prev,
        projectid: undefined,
      }
    })
  }
  function addProject(details){
    SetProjectSelected(prev =>{
      const newProject = {
        ...details,
        projectid : Math.random(),
      }
      return {
        ...prev,
        projectid : undefined,
        projects : [...prev.projects,newProject]
      }
    })
  }

  function handleSelectProject(id){
    SetProjectSelected(prev =>{
      return{
        ...prev,
        projectid: id,
      }
    })
  }

  function handleDelete(){
    SetProjectSelected(prev =>{
      return{
        ...prev,
        projectid: null,
        projects : prev.projects.filter((project)=>
          project.projectid !== prev.projectid
        )
      }
    })
  }
  const selectedProject = ProjectSelected.projects.find(project => project.projectid === ProjectSelected.projectid)
  let startpage =<SelectProject projects={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={ProjectSelected.tasks}/>;
  if(ProjectSelected.projectid===null){
    startpage = <NewProject addProject={addProject} onCancel={handleCancel}/>
  }
  else if (ProjectSelected.projectid===undefined){
    startpage = <NoProjectSelected startProject={handleStartProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar startProject={handleStartProject} projects={ProjectSelected.projects} selectProject={handleSelectProject} selectProjectid={ProjectSelected.projectid}/>
      {startpage}
    </main>
  );
}

export default App;
