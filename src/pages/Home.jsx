import Header from "../components/layout/Header";
import TaskForm from "../components/tasks/TaskForm";
import TaskFilters from "../components/tasks/TaskFilters";
import TaskList from "../components/tasks/TaskList";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#1e1e1e] transition-colors">
            <Header />
            <main className="max-w-3xl mx-auto px-4 py-6 my-4 rounded-md space-y-6 bg-gray-200 dark:bg-[#121212]">
                <TaskForm />
                <TaskFilters />
                <TaskList />
            </main>
        </div>
    );
}
