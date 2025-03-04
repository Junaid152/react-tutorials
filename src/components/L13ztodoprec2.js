import React, { useState } from "react";

function L13ztodoprec2() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const add = (todo) => {
    const newTodo = {
      //   id: add.length + 1,
      id: list.length,
      todo: todo,
    };
    setList([...list, newTodo]);
    setInput("");
  };

  const del = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <>
      <div className="mb-4">
        <hr className="mt-5" />
        <h1>L13ztodoprec2 todo from youtube</h1>
        <a href="https://www.youtube.com/watch?v=MXId-Ae6k_I">
          youtube link for todo app link as it is made from tutorial
        </a>
      </div>
      <input
        placeholder="Enter Tasks for todo things"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={() => add(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <div>
            <li key={todo.id}>
              {todo.todo} <button onClick={() => del(todo.id)}>x</button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default L13ztodoprec2;
