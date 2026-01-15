# 📝 Advanced Task Manager App

A modern, responsive **Task Manager application** built with **React + Vite**.  
The app demonstrates clean architecture, state management with Context API, drag-and-drop interactions, dark/light theming, and local storage persistence.

---

## 🚀 Live Demo
🚀 **[View Task Manager App on Render](https://limetray.onrender.com)**

---

## 📦 Tech Stack

- **React** (Vite)
- **Context API** (global state management)
- **react-beautiful-dnd** (drag & drop task reordering)
- **Tailwind CSS v3.4.17** (utility-first styling)
- **lucide-react** (icons)
- **react-hot-toast** (notifications)
- **LocalStorage API** (data persistence)

---

## ✨ Features

### ✅ Core Features
- Add new tasks
- Mark tasks as completed / pending
- Delete tasks
- Filter tasks:
  - All
  - Completed
  - Pending
- Persist tasks across page refreshes using Local Storage

### 🔄 Drag & Drop
- Reorder tasks using drag & drop
- Stable drag behavior with consistent task ordering

### 🌗 Theme Support
- Light / Dark mode toggle
- Theme preference saved in Local Storage

### ⚡ Performance & Best Practices
- `React.memo` for optimized re-renders
- `useCallback` & `useMemo` for stable functions
- Custom `useLocalStorage` hook
- Clean component & context separation

### 📱 Responsive Design
- Mobile-first layout
- Works smoothly across screen sizes

---

## 📁 Project Structure

```

src/
├── components/
│   ├── layout/
│   │   └── Header.jsx
│   └── tasks/
│       ├── TaskForm.jsx
│       ├── TaskList.jsx
│       └── TaskItem.jsx
├── context/
│   ├── TaskContext.jsx
│   └── ThemeContext.jsx
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   └── Home.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx

````

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

