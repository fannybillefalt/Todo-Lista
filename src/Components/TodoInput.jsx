import { useState } from 'react'

function TodoInput({ addTodoList }) {//tar emot propen
    const [text, setText] = useState("");

    function handleChange(event){
        setText(event.target.value);
    }

  return (
    <div className="todo-input-container">
   <input value={text} onChange={handleChange}/>
   <button onClick={() => {
    addTodoList(text)
    setText("")
}}>Lägg till</button>
    </div>
  )
}

export default TodoInput