import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";



function TaskList({tasks, onDelete, onToggle, onEdit}) {
    const [currentIndexTask, setCurrentIndexTask] = useState(0);

    useEffect(() => {
        if (tasks.length === 0) {
          setCurrentIndexTask(0);
          return;
        }
        if (currentIndexTask > tasks.length - 1) {
            setCurrentIndexTask(tasks.length - 1);
        }
    }, [tasks, currentIndexTask]);

    function goToNextTask() {
        if (tasks.length <= 1) return;
        setCurrentIndexTask((index) => (index + 1) % tasks.length)
    }

    function goToPrevTask() {
        if (tasks.length <= 1) return;
        setCurrentIndexTask((index) => (index - 1 + tasks.length) % tasks.length)
    }

    const currentTask = tasks.length ? tasks[currentIndexTask] : null;

    return (
        <div>
            <div>
                {currentTask && (
                    <TaskItem
                        key={currentTask.id}
                        task={currentTask}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onToggle={onToggle}
                    />
                )}
            </div>
            <div>
                <button onClick={goToPrevTask} disabled={tasks.length <= 1}>‹</button>
                <span className="carousel-counter">
                    {tasks.length ? `${currentIndexTask + 1} / ${tasks.length}` : '0 / 0'}
                </span>
                <button onClick={goToNextTask} disabled={tasks.length <= 1}>›</button>
            </div>
        </div>
        
    )
}

export default TaskList;
