import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

// REWATCH 157 TO TRY TO FIND BUG
export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === "" ||
      enteredDescription.trim().length === "" ||
      enteredDueDate.trim().length === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} btnCaption="Close">
        <h2>UH OH...</h2>
        <p>Enter a value.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div className="flex items-center justify-end gap-4 my-4">
          <div>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </div>
          <div>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
        <div>
          <Input type="text" ref={title} label="Project" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
