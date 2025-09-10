import React, { useEffect, useState } from "react";
import { getBoards, createBoard, updateBoard, deleteBoard } from "../api/client";
import BoardView from "../components/BoardView";

export default function HomePage() {
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [error, setError] = useState(""); // 👈 add error state

    // Fetch boards when component loads
    useEffect(() => {
        refreshBoards();
    }, []);

    async function refreshBoards() {
    try {
        const data = await getBoards();
        console.log("Fetched boards:", data);
        setBoards(data);
        if (data.length > 0 && !selectedBoard) {
        setSelectedBoard(data[0]);
        }
    } catch (err) {
        console.error("Error fetching boards:", err);
    }
    }

    async function handleCreateBoard(e) {
        e.preventDefault();
        if (!newTitle.trim()) {
            setError("Board title is required");
            return;
        }
        setError("");

        await createBoard({ title: newTitle });
        setNewTitle("");
        refreshBoards();
    }

    async function handleRenameBoard(board) {
        const newTitle = prompt("Enter new board title", board.title);
        if (!newTitle) return;
        await updateBoard(board.id, { title: newTitle });
        refreshBoards();
    }

    async function handleDeleteBoard(id) {
        if (!window.confirm("Delete this board?")) return;
        await deleteBoard(id);
        refreshBoards();
        setSelectedBoard(null);
    }


    return (
        <div className="app-layout">
        {/* Sidebar */}
        <aside className="sidebar">
            <h2>kanban</h2>
            <ul className="board-list">
                {boards.map((b) => (
                    <li
                    key={b.id}
                    className={selectedBoard?.id === b.id ? "active" : ""}
                    onClick={() => setSelectedBoard(b)}
                    >
                        <span onClick={() => setSelectedBoard(b)}>{b.title}</span>
                        <button onClick={() => handleRenameBoard(b)}>✏️</button>
                        <button onClick={() => handleDeleteBoard(b.id)}>🗑️</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleCreateBoard} className="new-board-form">
                <input
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="New board"
                />
                <button type="submit">Add</button>
            </form>

            {error && <p className="error">{error}</p>}

        </aside>

        {/* Main content */}
        <main className="main">
            {selectedBoard ? (
            <BoardView board={selectedBoard} />
            ) : (
            <p>Select a board</p>
            )}
        </main>
        </div>
    );
}

