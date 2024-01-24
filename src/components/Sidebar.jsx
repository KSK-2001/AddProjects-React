import Button from "./Button";

export default function Sidebar({ startProject, projects, selectProject, selectProjectid }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounde-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        New Project
      </h2>
      <Button onClick={startProject}>+Add Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
        let cssClass = "w-full text-left px-2 py-1 rounde-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800" ;
            if(project.id === selectProjectid){
                cssClass+= " bg-stone-800 text-stone-200"
            }
            else{
                cssClass += " text-stone-400" 
            }
          return (
            <li key={project.projectid}>
              <button
                onClick={()=>selectProject(project.projectid)}
                className="w-full text-left px-2 py-1 rounde-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
