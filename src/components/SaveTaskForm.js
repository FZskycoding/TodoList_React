//處理todo編輯的部分
import React, { useState } from "react";

export const SaveTaskForm = ({ saveNewTask, newTask }) => {
  const [value, setValue] = useState(newTask.taskName);

  //當add按鈕按下:
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止重整畫面
    saveNewTask(value, newTask.id); //將內容傳給editTodo
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update
      </button>
    </form>
  );
};
