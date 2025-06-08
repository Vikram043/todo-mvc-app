const fs = require("fs").promises;
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "db.json");


async function readTodos() {
  const data = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(data);
}

async function writeTodos(todos) {
  await fs.writeFile(DB_PATH, JSON.stringify(todos, null, 2));
}


async function getAllTodos() {
  return await readTodos();
}


async function getTodoById(id) {
  const todos = await readTodos();
  return todos.find(todo => todo.id === id);
}


async function addTodo(todo) {
  const todos = await readTodos();
  todo.id = Date.now().toString(); 
  todos.push(todo);
  await writeTodos(todos);
  return todo;
}


async function updateTodo(id, updatedFields) {
  const todos = await readTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...updatedFields };
  await writeTodos(todos);
  return todos[index];
}


async function deleteTodo(id) {
  const todos = await readTodos();
  const filtered = todos.filter(todo => todo.id !== id);
  if (todos.length === filtered.length) return false;
  await writeTodos(filtered);
  return true;
}


async function searchTodos(query) {
  const todos = await readTodos();
  return todos.filter(todo =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
}

module.exports = {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos
};
