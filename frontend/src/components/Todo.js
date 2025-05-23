//陳列出所有task的格式
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ eachTask, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(eachTask.id)}
        className={`${eachTask.completed ? "completed" : "incompleted"}`}
      >
        {eachTask.taskName}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(eachTask.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(eachTask.id)}
        />
      </div>
    </div>
  );
};
