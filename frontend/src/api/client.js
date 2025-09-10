const API_BASE = "http://localhost:4000/api";

// Boards
export async function getBoards() {
  const res = await fetch(`${API_BASE}/boards`);
  return res.json();
}
export async function createBoard(data) {
  const res = await fetch(`${API_BASE}/boards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateBoard(id, data) {
  const res = await fetch(`http://localhost:4000/api/boards/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBoard(id) {
  const res = await fetch(`http://localhost:4000/api/boards/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}

// Columns
export async function createColumn(data) {
  const res = await fetch(`http://localhost:4000/api/columns`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}


// Tasks
export async function createTask(data) {
  const res = await fetch(`http://localhost:4000/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateTask(id, data) {
  const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}

// Subtasks
export async function createSubtask(data) {
  const res = await fetch(`http://localhost:4000/api/subtasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

