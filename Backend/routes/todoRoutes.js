const express = require("express");
const router = express.Router();

const {
  fetchAllTodos,
  searchTodoTitles,
  createTodo,
  updateTodoById,
  deleteTodoById
} = require("../controllers/todoController");


router.get("/", fetchAllTodos);
router.get("/search", searchTodoTitles);
router.post("/", createTodo);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodoById);

module.exports = router;
