import { useEffect, useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({onAdd, setShowForm, initialTask}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("low");

    useEffect(() => {
        if (initialTask) {
            setTitle(initialTask.title || "");
            setDescription(initialTask.description || "");
            setPriority(initialTask.priority || "low");
        } else {
            setTitle("");
            setDescription("");
            setPriority("low");
        }
    }, [initialTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title, description, priority};
        onAdd(newTask);
        setTitle("");
        setDescription("");
        setPriority("low");
        setShowForm(false);
        
    }

    return (
        <div className="task-form-overlay">
            <div className="task-form-card">
                <button
                    type="button"
                    className="task-form-close"
                    onClick={() => setShowForm(false)}
                    aria-label="Close"
                >
                    ×
                </button>
                <h1>Add New Task</h1>
                <form onSubmit={handleSubmit}>
                    <h2>Title</h2>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <h2>Description</h2>
                    <textarea 
                        placeholder="Add description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <h2>Choose Priority</h2>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm;
