import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodosList] = useState(() => {
    const sparadeTodos = localStorage.getItem("todos");
    return sparadeTodos ? JSON.parse(sparadeTodos) : [];
  }); //läser todos när sidan laddas

  useEffect(() => {
    //sparar todos varje gång listan ändras
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodoList(text) {
    setTodosList([...todos, { id: Date.now(), text: text, completed: false }]);
  }

  function deleteTodo(id) {
    setTodosList(todos.filter((todos) => todos.id !== id));
  }

  function toggleTodo(id) {
    setTodosList(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    //skickar ner propen till barnet
    <div classname="todo-wrapper">
      <h1>Todo lista</h1>
      <TodoInput addTodoList={addTodoList} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
