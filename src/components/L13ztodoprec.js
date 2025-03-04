import React, { useState } from "react";

export default function L13ztodoPrec() {
  const [submitText, setSubmitText] = useState("");
  const taskValue = (event) => {
    setSubmitText(event.target.value);
  };

  const [newTasksAdd, setNewTasksAdd] = useState([]);
  const addTask = () => {
    // console.log(submitText);
    setNewTasksAdd([...newTasksAdd, submitText]);
    setSubmitText("");
    // console.log(submitText);
  };

  //   const removeTask = (index) => {
  //     setNewTasksAdd(newTasksAdd.filter((_, i) => i !== index));
  //   };

  //   const removeTask = (index) => {
  //     const updatedTasks = newTasksAdd.filter((_, i) => i !== index); // Remove the selected task
  //     setNewTasksAdd(updatedTasks);
  //   };

  const removeTask = (index) => {
    // Create a new array to store updated tasks
    let updatedTasks = [];

    // Loop through all tasks
    for (let i = 0; i < newTasksAdd.length; i++) {
      // If the current task index is NOT the one we want to delete, add it to updatedTasks
      if (i !== index) {
        updatedTasks.push(newTasksAdd[i]);
      }
    }

    // Update the state with the new tasks list (without the deleted one)
    setNewTasksAdd(updatedTasks);
  };

  return (
    <>
      <div>
        <h2>L13z todoprec Prec Todo App</h2>
        <input
          type="text"
          placeholder="Enter Todo activities"
          value={submitText}
          onChange={taskValue}
        />
        <button onClick={addTask}>Add Todo Activity</button>
      </div>
      <ul className="list-disc pl-5">
        {newTasksAdd.map((t, i) => (
          <li key={i} className="py-1">
            {t} <button onClick={() => removeTask(i)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
