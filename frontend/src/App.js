import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { addTask, deleteTask, getTasks, toggleTask, updateTask } from './services/TasksServices';

function App() {

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all'); // all | completed | pending

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  async function addTaskHandle(newTask) {
    const createdTask = await addTask(newTask);
    setTasks(prev => [...prev, createdTask]);
  }

  async function editTaskHandle(task) {
    setEditingTask(task);
    setShowForm(true);
  }

  async function saveTaskHandle(taskData) {
    if (editingTask) {
      const updated = await updateTask(editingTask.id, taskData);
      setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
      setEditingTask(null);
    } else {
      await addTaskHandle(taskData);
    }
  }

  async function deleteTaskHandle(taskId) {
    await deleteTask(taskId);
    setTasks(prev => prev.filter(task => task.id !== taskId));
  }

  async function toggleTaskHandle(taskId) {
    const updated = await toggleTask(taskId);
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
  }

  const filteredTasks = tasks.filter(t => {
    if (filter === 'completed') return !!t.completed;
    if (filter === 'pending') return !t.completed;
    return true;
  });

  return (
    <div className="App">
      <header className="App-header">
        Task Manager
      </header>
      <div style={{ margin: '12px 0' }}>
        <button className="primary-btn" onClick={() => setShowForm(true)}>Add Task</button>
      </div>
      <div className="btn-group" style={{ margin: '12px 0' }}>
        <button onClick={() => setFilter('all')} disabled={filter==='all'}>All</button>
        <button onClick={() => setFilter('completed')} disabled={filter==='completed'}>Completed</button>
        <button onClick={() => setFilter('pending')} disabled={filter==='pending'}>Pending</button>
      </div>
      {showForm && (
        <TaskForm
          onAdd={saveTaskHandle}
          setShowForm={setShowForm}
          initialTask={editingTask}
        />
      )}
      <TaskList tasks={filteredTasks} onDelete={deleteTaskHandle} onEdit={editTaskHandle} onToggle={toggleTaskHandle}/>
    </div>
  );
}

export default App;
