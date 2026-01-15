import { useTasks } from "../../context/TaskContext";

const filters = ["ALL", "COMPLETED", "PENDING"];

export default function TaskFilters() {
    const { filter, setFilter } = useTasks();

    return (
        <div className="flex gap-2">
            {filters.map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1 rounded ${filter === f
                            ? "bg-[#6200ee] dark:bg-[#bb86fc] text-[#dfdfdf] dark:text-[#303030]"
                            : "bg-gray-300 dark:bg-[#1e1e1e] dark:text-[#dfdfdf] text-[#606060]"
                        }`}
                >
                    {f}
                </button>
            ))}
        </div>
    );
}
