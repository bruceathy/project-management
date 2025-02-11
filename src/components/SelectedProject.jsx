export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-1">
      <header>
        <div>
          <h1>{project.title}</h1>
          <button>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
    </div>
  );
}
