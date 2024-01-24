import NewTask from "./NewTask";

export default function Tasks({ tasks, onADD, onDEL }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onADD={onADD} />
      {tasks.length == 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  onClick={() => onDEL(task.id)}
                  className="text-stone-400 hover:text-red-500"
                >
                  clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <ul></ul>
    </section>
  );
}
