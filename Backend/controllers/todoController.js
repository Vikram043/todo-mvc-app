const {
  getAllTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos
} = require("../models/todoModel");


const fetchAllTodos = async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};


const searchTodoTitles = async (req, res) => {
  try {
    const query = req.query.q || "";
    const results = await searchTodos(query);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};


const createTodo = async (req, res) => {
  try {
    const { title, completed } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const newTodo = await addTodo({
      title,
      completed: completed || false,
    });

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};


const updateTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await updateTodo(id, req.body);

    if (!updated) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};


const deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await deleteTodo(id);

    if (!success) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

module.exports = {
  fetchAllTodos,
  searchTodoTitles,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
