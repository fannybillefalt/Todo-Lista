import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  //todoList lagrar en lista med alla todo
  const [todos, setTodosList] = useState(JSON.parse(sparadeTodos) || []); //läser todos när sidan laddas, om det finns, omvandla texten tillbaka till en array med JSON.parse,
  // om det inte finns, börja med en tom lista.

  useEffect(() => {
    //sparar todos varje gång listan ändras
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodoList(text) {
    setTodosList([...todos, { id: Date.now(), text: text, completed: false }]);
  }

  function deleteTodo(id) {
    //behåll alla todos när id inte matchar, den todo som matchar faller bort automatiskt.
    setTodosList(todos.filter((todos) => todos.id !== id));
  }

  function toggleTodo(id) {
    //som en PÅ/AV knapp, är todo klar eller ej.
    setTodosList(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

  return (
    //skickar ner propen till barnet
    <div className="todo-wrapper">
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
