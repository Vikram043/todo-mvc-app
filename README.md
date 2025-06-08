# 📝 Todo MVC Application with Express.js

A simple Todo management system built using **Express.js** with a **file-based JSON database**, structured using the **MVC architecture**. It supports full CRUD operations and case-insensitive partial search functionality.

---

## 📁 Project Structure

```
todo-mvc-app/
│
├── controllers/        # Business logic (handlers)
│   └── todoController.js
├── models/             # Data layer (read/write db.json)
│   └── todoModel.js
├── routes/             # All route definitions
│   └── todoRoutes.js
│
├── db.json             # File-based mock database
├── server.js           # App entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js installed

### ⚙️ Installation

```bash
git clone https://github.com/yourusername/todo-mvc-app.git
cd todo-mvc-app
npm install
```

### ▶️ Running the App

```bash
node server.js
```

Server will start at: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Available API Endpoints

### 1. `GET /todos`
- Returns all todos from `db.json`.

---

### 2. `POST /todos`
- Add a new todo.
```json
Request Body:
{
  "title": "Buy groceries",
  "completed": false
}
```

---

### 3. `GET /todos/search?q=gro`
- Partial & case-insensitive search for todo titles containing the string `"gro"`.

---

### 4. `PUT /todos/:id`
- Update specific fields (e.g., `completed`) of a todo using its ID.
```json
Request Body:
{
  "completed": true
}
```

---

### 5. `DELETE /todos/:id`
- Delete the todo by ID.

---

### 6. Undefined Routes
- Any other route returns:
```json
{
  "error": "404 Not Found"
}
```

---

## 💡 Extra Features
- ✅ Case-insensitive search using query string.
- ✅ Modular code using MVC pattern.
- ✅ Graceful error handling.
- ✅ Flat-file DB using `fs.promises` and `db.json`.

---

## 📦 Tech Stack
- Node.js
- Express.js
- JavaScript
- File System (`fs`)
- JSON (for db)

---

## 🧑‍💻 Author
- [Student-developer Vikram](https://github.com/yourusername)

---

## 📬 Submission Instructions
1. Push the project to a public Masai GitHub repo.
2. Share the repo link for evaluation.
