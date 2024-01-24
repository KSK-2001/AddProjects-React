import noProjectimage from "../assets/no-projects.png";
import Button from "./Button";
export default function NoProjectSelected({ startProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectimage}
        alt="an empty task list"
        className="w-16 h-16b object-conatin mx-auto"
      />
      <h2 className="text-xl font -bold text-stone-500 my-4">
        No Project selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project to continue</p>
      <p>
        <Button onClick={startProject}>Create new Project</Button>
      </p>
    </div>
  );
}
