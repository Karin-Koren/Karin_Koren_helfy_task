import "../styles/TaskItem.css";

function TaskItem({task, onDelete, onToggle, onEdit}) {

    if (!task) return null;
    const { title, description, completed, createdAt, priority } = task;

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      <div className="task-header">
        <input type="checkbox" checked={!!completed} onChange={() => onToggle && onToggle(task.id)} />
        <h3>{title}</h3>
        <span className={`priority ${priority}`}>{priority}</span>
      </div>
      <p>{description}</p>
      <div className="task-footer">
        <span>Created: {new Date(createdAt).toLocaleString()}</span>
        <span>Status: {completed ? "✅ Completed" : "❌ Open"}</span>
      </div>
      <div>
        <button onClick={() => onEdit && onEdit(task)}>📝</button>
        <button onClick={() => onDelete && onDelete(task.id)}>❌</button>
      </div>
    </li>
  );
}

export default TaskItem;
