import Tasks from "./Tasks";

export default function SelectProject({projects,onDelete,onAddTask,onDeleteTask,tasks}){
    const formattedDate = new Date(projects.duedate).toLocaleDateString('en-US',{
        year:'numeric',
        month: "short",
        day: "numeric"
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{projects.title}</h1>
                    <button onClick={onDelete}>Delete</button>
                    </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-sone-600 whitespace-pre-wrap">{projects.description}</p>
            </header>
            <Tasks onADD={onAddTask}  onDEL={onDeleteTask} tasks={tasks}/>
        </div>
    );
}