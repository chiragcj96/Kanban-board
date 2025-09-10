# 🗂️ Kanban Board

A full-stack Kanban board application built with **React (Vite)** for the frontend and **Node.js/Express** for the backend.  
Users can manage tasks in a drag-and-drop board, with persistence powered by the backend API.

---

## 🚀 Features
- ✅ Modern UI with **React + Vite**
- ✅ Backend API with **Node.js/Express**
- ✅ RESTful API integration
- ✅ Easy local setup

---

## 📦 Project Structure
```
Kanban-board/
├── frontend/     # React + Vite app
├── backend/      # Node.js/Express API
└── README.md     # You are here
```

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/chiragcj96/Kanban-board.git
cd Kanban-board
```

### 2. Setup Backend
```bash
cd backend
npm install
npm start
```

- Runs on: `http://localhost:5000` (default)  
- API base URL: `http://localhost:5000/api`

### 3. Setup Frontend
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

- Runs on: `http://localhost:5173` (default)  
- Update `frontend/.env` to point to your backend:
  ```env
  VITE_API_URL=http://localhost:5000
  ```

---

## 📖 API Endpoints (example)
| Method | Endpoint          | Description       |
|--------|------------------|-------------------|
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create new task   |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

---
