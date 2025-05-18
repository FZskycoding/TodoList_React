//負責撰寫功能
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { SaveTaskForm } from "./SaveTaskForm";

export const TodoWrapper = () => {
  //建立可以儲存task的陣列todos
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  // 初始加載數據
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/todos");
        setTodos(response.data);
      } catch (err) {
        console.error("Failed to fetch todos:", err);
        setError("Failed to load todos");
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (todo) => {
    try {
      const newTodo = {
        id: uuidv4(),
        taskName: todo,
        completed: false,
        isEditing: false,
      };
      const response = await axios.post("http://localhost:8080/todos", newTodo);
      setTodos([...todos, response.data]);
    } catch (err) {
      console.error("Failed to add todo:", err);
      setError("Failed to add todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todos?id=${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Failed to delete todo:", err);
      setError("Failed to delete todo");
    }
  };

  const editTodo = async (id) => {
    console.log("正在切換編輯狀態");
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    );
    setTodos(updatedTodos);
  };

  const saveNewTask = async (taskName, id) => {
    try {
      const updatedTodo = todos.find((todo) => todo.id === id);
      const newTodo = { ...updatedTodo, taskName, isEditing: false };
      await axios.put(`http://localhost:8080/todos`, newTodo);
      setTodos(todos.map((todo) => (todo.id === id ? newTodo : todo)));
    } catch (err) {
      console.error("Failed to update todo:", err);
      setError("Failed to update todo");
    }
  };

  const toggleComplete = async (id) => {
    try {
      const todoToUpdate = todos.find((todo) => todo.id === id);
      const updatedTodo = {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      };
      await axios.put(`http://localhost:8080/todos`, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      console.error("Failed to toggle todo:", err);
      setError("Failed to toggle todo");
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Write your todo list!</h1>
      {error && <div className="error-message">{error}</div>}
      <TodoForm addTodo={addTodo} />
      {Array.isArray(todos) &&
        todos.map((todo) =>
          todo.isEditing ? (
            <SaveTaskForm saveNewTask={saveNewTask} newTask={todo} />
          ) : (
            <Todo
              eachTask={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          )
        )}
    </div>
  );
};
