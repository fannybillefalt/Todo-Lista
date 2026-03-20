import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-item">
      <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
      <input
        type="checkbox"
        onClick={() => {
          toggleTodo(todo.id);
        }}
      />
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Ta bort
      </button>
    </div>
  );
}

export default TodoItem;
