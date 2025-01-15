import Input from "./Input";
export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Project" />
        <Input label="Description" textarea />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
}