

const API = "http://localhost:4000/tasks"

export async function getTasks(){
    const res = await fetch(API);
    return res.json();
}

export async function addTask(task){
    const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
    });
    return res.json();
}

export async function updateTask(taskId, updateTask) {
  const res = await fetch(`${API}/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateTask),
  });
  return res.json();
}

export async function deleteTask(taskId) {
  await fetch(`${API}/${taskId}`, { method: "DELETE" });
}

export async function toggleTask(taskId) {
  const res = await fetch(`${API}/${taskId}/toggle`, { method: "PATCH" });
  return res.json();
}
