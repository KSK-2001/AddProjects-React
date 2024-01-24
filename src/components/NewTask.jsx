import { useState } from "react";

export default function NewTask({ onADD }) {
  const [enteredTask, setenteredTask] = useState("");
  function handlechange(event) {
    setenteredTask(event.target.value);
  }
  function handleadd() {
    if (enteredTask.trim() === "") {
      return;
    }
    onADD(enteredTask);
    setenteredTask("");
  }
  return (
    <div className="flex items-center">
      <input
        onChange={handlechange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleadd}
        className="text-stone-700 hover:text-stone-950 px-2"
      >
        Add task
      </button>
    </div>
  );
}
