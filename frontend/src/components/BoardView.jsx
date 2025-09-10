import React, { useEffect, useState } from "react";
import Column from "./Column";
import { createColumn } from "../api/client";

export default function BoardView({ board }) {
  const [columns, setColumns] = useState(board.columns || []);
  const [newColTitle, setNewColTitle] = useState("");

  // Keep board columns in sync if parent changes
  useEffect(() => {
    setColumns(board.columns || []);
  }, [board]);

  async function handleAddColumn(e) {
    e.preventDefault();
    if (!newColTitle.trim()) return;

    const newColumn = await createColumn({
      boardId: board.id,
      title: newColTitle,
      position: columns.length + 1,
    });

    setColumns([...columns, newColumn]);
    setNewColTitle("");
  }

  return (
    <div className="board-view">
      <h2>{board.title}</h2>
      <div className="columns">
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}

        {/* New Column form */}
        <form onSubmit={handleAddColumn} className="new-column-form">
          <input
            value={newColTitle}
            onChange={(e) => setNewColTitle(e.target.value)}
            placeholder="New column"
          />
          <button type="submit">+ Add Column</button>
        </form>
        <div style={{ flex: "1 1 auto" }}></div>
      </div>
    </div>
  );
}

