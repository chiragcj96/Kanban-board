import React from "react";

export default function SubtaskList({ subtasks }) {
  if (!subtasks || subtasks.length === 0) return null;

  return (
    <ul className="subtask-list">
      {subtasks.map((s) => (
        <li key={s.id}>
          <input type="checkbox" checked={s.isDone} readOnly /> {s.title}
        </li>
      ))}
    </ul>
  );
}
