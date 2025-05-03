//按下Add可以獲得task內容
import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //當add按鈕按下:
  const handleSubmit = (e) => {
    e.preventDefault(); // 防止重整畫面
    addTodo(value); //將內容傳給addTodo
    setValue(""); //將輸入欄位清空
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add
      </button>
    </form>
  );
};
