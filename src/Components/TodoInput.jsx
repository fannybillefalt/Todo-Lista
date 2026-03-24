import { useState } from "react";

function TodoInput({ addTodoList }) {
  //tar emot propen från todolist för att adderas här med lagras i todolist där listan finns.
  // todoinput lagrar textsträngarna som kommer in av användaren
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleClick() {
    addTodoList(text);
    setText("");
  }

  return (
    <div className="todo-input-container">
      <input value={text} onChange={handleChange} />
      <button onClick={handleClick}>Lägg till</button>
    </div>
  );
}

export default TodoInput;
