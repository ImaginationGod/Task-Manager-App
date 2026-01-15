import { Trash2 } from "lucide-react";
import { useTasks } from "../../context/TaskContext";
import React from "react";

const TaskItem = React.memo(({ task }) => {
    const { toggleTask, deleteTask, filter } = useTasks();

    if (
        (filter === "COMPLETED" && !task.completed) ||
        (filter === "PENDING" && task.completed)
    ) {
        return null;
    }

    return (
        <div className="flex items-center justify-between text-[#303030] p-3 bg-white dark:bg-[#1e1e1e] dark:text-[#dfdfdf] rounded shadow">
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    className="accent-[#6200ee] dark:accent-[#bb86fc]"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
                <span className={task.completed ? "line-through text-gray-400" : ""}>
                    {task.text}
                </span>
            </label>
            <button onClick={() => deleteTask(task.id)}>
                <Trash2 className="text-red-500" />
            </button>
        </div>
    );
});

export default TaskItem;
