import { useState } from "react";
import { Plus } from "lucide-react";
import { useTasks } from "../../context/TaskContext";

export default function TaskForm() {
    const [text, setText] = useState("");
    const { addTask } = useTasks();

    const submit = (e) => {
        e.preventDefault();
        addTask(text);
        setText("");
    };

    return (
        <form onSubmit={submit} className="flex gap-2">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a task..."
                className="flex-1 px-4 py-2 rounded border-2 border-[#dfdfdf] dark:bg-[#1e1e1e] text-[#303030] dark:text-[#dfdfdf]"
            />
            <button className="bg-[#6200ee] dark:bg-[#bb86fc] text-[#dfdfdf] dark:text-[#303030] px-4 rounded">
                <Plus />
            </button>
        </form>
    );
}
