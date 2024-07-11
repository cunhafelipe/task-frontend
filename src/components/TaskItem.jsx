export default function TaskItem({ task }) {
  return (
    <div>
      <h2>{task.description}</h2>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </div>
  );
}
