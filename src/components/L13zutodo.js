import React, { useState } from "react";

function L13zutodo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  // Function to add a task
  const add = (todo) => {
    setList([...list, { id: list.length, todo }]);
    setInput(""); // Clear input field
  };

  // Function to delete a task
  const del = (id) => setList(list.filter((todo) => todo.id !== id));

  return (
    <>
      <h2>Simple To-Do App</h2>
      <input
        placeholder="Enter Task"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => add(input)}>Add</button>

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo} <button onClick={() => del(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default L13zutodo;
