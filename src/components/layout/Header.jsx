import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-[#6200ee] dark:bg-[#121212] shadow">
            <h1 className="text-xl font-bold text-[#dfdfdf]">
                Task Manager
            </h1>
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded hover:bg-[#5102c2] text-[#dfdfdf] dark:bg-[#bb86fc] dark:text-[#303030] dark:hover:bg-[#6b3ea3]"
            >
                {theme === "light" ? <Moon /> : <Sun />}
            </button>
        </header>
    );
}
