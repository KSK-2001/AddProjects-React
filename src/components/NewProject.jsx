import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ addProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const modal = useRef();

  function handleSave() {
    const projtitle = title.current.value;
    const projdesc = description.current.value;
    const projdue = duedate.current.value;
    if (
      projtitle.trim() === "" ||
      projdesc.trim() === "" ||
      projdue.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    addProject({
      title: projtitle,
      description: projdesc,
      duedate: projdue,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font -bold text-stone-500 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-700 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">Please provid a valid input</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-2 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
