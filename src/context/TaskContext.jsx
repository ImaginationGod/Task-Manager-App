import { createContext, useContext, useCallback, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import toast from "react-hot-toast";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useLocalStorage("tasks", []);
    const [filter, setFilter] = useLocalStorage("filter", "ALL");

    const addTask = useCallback((text) => {
        if (!text.trim()) {
            toast.error("Task cannot be empty");
            return;
        }

        setTasks(prev => [
            {
                id: crypto.randomUUID(),
                text,
                completed: false,
            },
            ...prev,
        ]);

        toast.success("Task added");
    }, [setTasks]);

    const toggleTask = useCallback((id) => {
        setTasks(prev =>
            prev.map(t =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    }, [setTasks]);

    const deleteTask = useCallback((id) => {
        setTasks(prev => prev.filter(t => t.id !== id));
        toast.success("Task deleted");
    }, [setTasks]);

    const reorderTasks = useCallback((startIndex, endIndex) => {
        setTasks(prev => {
            const updated = [...prev];
            const [removed] = updated.splice(startIndex, 1);
            updated.splice(endIndex, 0, removed);
            return updated;
        });
    }, [setTasks]);

    const visibleTasks = useMemo(() => {
        if (filter === "COMPLETED") return tasks.filter(t => t.completed);
        if (filter === "PENDING") return tasks.filter(t => !t.completed);
        return tasks;
    }, [tasks, filter]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                visibleTasks,
                filter,
                setFilter,
                addTask,
                toggleTask,
                deleteTask,
                reorderTasks,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = () => useContext(TaskContext);
