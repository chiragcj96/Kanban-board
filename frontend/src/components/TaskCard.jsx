import React, { useState } from "react";
import SubtaskList from "./SubtaskList";
import { createSubtask, updateTask, deleteTask } from "../api/client";

export default function TaskCard({ task }) {
    const [subtasks, setSubtasks] = useState(task.subtasks || []);
    const [newSubtaskTitle, setNewSubtaskTitle] = useState("");

    const completed = subtasks.filter((s) => s.isDone).length;

    async function handleAddSubtask(e) {
        e.preventDefault();
        if (!newSubtaskTitle.trim()) return;

        const newSubtask = await createSubtask({
        taskId: task.id,
        title: newSubtaskTitle,
        });

        setSubtasks([...subtasks, newSubtask]);
        setNewSubtaskTitle("");
    }

    async function handleRenameTask() {
        const newTitle = prompt("Enter new task title", task.title);
        if (!newTitle) return;
        await updateTask(task.id, { title: newTitle });
        window.location.reload();
    }

    async function handleDeleteTask() {
        if (!window.confirm("Delete this task?")) return;
        await deleteTask(task.id);
        window.location.reload();
    }

    return (
        <div className="task-card">
        <h4>{task.title}</h4>
        {task.description && <p>{task.description}</p>}
        <small>
            {completed} of {subtasks.length} subtasks
        </small>
        <SubtaskList subtasks={subtasks} />

        <div className="task-actions">
            <button onClick={handleRenameTask}>✏️ Edit</button>
            <button onClick={handleDeleteTask}>🗑️ Delete</button>
        </div>
        </div>
    );
}
