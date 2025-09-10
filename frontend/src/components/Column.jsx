import React, { useState } from "react";   
import TaskCard from "./TaskCard";
import { createTask } from "../api/client";

export default function Column({ column }) {
    const [tasks, setTasks] = useState(column.tasks || []);
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState(""); // 👈 add error state

    async function handleAddTask(e) {
        e.preventDefault();
        if (!newTaskTitle.trim()) {
            setError("Task title is required");
            return;
        }
        setError("");

        const newTask = await createTask({
            columnId: column.id,
            title: newTaskTitle,
            description: "",
        });

        setTasks([...tasks, newTask]);
        setNewTaskTitle("");
    }

    return (
        <div className="column">
            <h3>{column.title}</h3>
            <div className="task-list">
                {tasks.length > 0 ? (
                tasks.map((task) => <TaskCard key={task.id} task={task} />)
                ) : (
                    <p className="empty">No tasks</p>
                )}
            </div>

            {/* New Task form */}
            <form onSubmit={handleAddTask} className="new-task-form">
                <input
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="New task"
                />
                <button type="submit">+ Add Task</button>
            </form>

            {error && <p className="error">{error}</p>}

        </div>
    );
}
