Task Manager App

A simple full-stack Task Manager with a Node/Express backend and a React frontend.

Prerequisites

- Node.js 18+
- npm 8+

Project Structure

- `backend/`: Express server exposing task APIs
- `frontend/`: React app consuming the APIs

Setup & Installation

1. Install backend dependencies:

```bash
cd backend
npm install
```

2. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

Running the App

- Start the backend (port 4000):

```bash
cd backend
npm start
```

You should see: Running on 4000

- Start the frontend (port 3000):

```bash
cd ../frontend
npm start
```

Open the app at http://localhost:3000.

API Documentation
Base URL: http://localhost:4000/tasks

- GET /tasks
  - Returns an array of tasks
- POST /tasks
  - Body: { title: string, description: string, priority: "low"|"medium"|"high" }
  - Returns the created task
- PUT /tasks/:id
  - Body: any subset of { title, description, priority, completed }
  - Returns the updated task
- DELETE /tasks/:id
  - Deletes a task
- PATCH /tasks/:id/toggle
  - Toggles completed for the task

Assumptions & Decisions

- In-memory storage (data resets on server restart).
- Frontend assumes the backend runs on port 4000.
- Minimal validation for clarity.
- UI uses a single-task carousel.

Naming: initialTask vs editTask
`initialTask` describes that the form receives initial values to populate fields. The same component is reused for create and edit; the name remains accurate in both cases, while names like `editTask` imply it’s only for editing.

Scripts

- Backend: cd backend && npm start
- Frontend: cd frontend && npm start

License
MIT
