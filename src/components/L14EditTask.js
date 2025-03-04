import React, { useState } from "react";
// import "../App.css";
// import "../App.module.css";

export default function EditTask() {
  const [task, setTask] = useState("");
  const [newTasks, setNewTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() !== "") {
      // remove spaces and if not = empty "" then,
      setNewTasks([...newTasks, task]);
      setTask("");
    }
  };

  // Delete Task
  const delTasks = (indCheck) => {
    // 0
    const newList = newTasks.filter((_, i) => i !== indCheck);
    setNewTasks(newList);
  };

  // Enable Editing Mode
  const enableEdit = (indCheck) => {
    setEditIndex(indCheck);
    setEditText(newTasks[indCheck]); // Set the current task text in input
  };

  // Save Edited Task
  const saveTask = () => {
    const updatedTasks = newTasks.map((t, i) =>
      i === editIndex ? editText : t
    );
    setNewTasks(updatedTasks);
    setEditIndex(null); // Exit edit mode
  };

  return (
    <div id="edittask" className="p-5 max-w-md mx-auto border b-l-green">
      <h1 className="text-xl font-bold mb-0 c-green bg-dark p-4 ">
        Edit Task with To-Do Appss
      </h1>

      {/* Input for adding tasks */}
      <div className="d-flex justify-content-center gap-2 b-green p-5">
        <input
          type="text"
          className="border p-2 flex-grow w-75 p-3 fs-4 "
          placeholder="Enter a task..."
          value={task}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500  px-4 py-2 rounded b-yellow fs-4"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="list-disc pl-5 fs-5 bg-l-green p-5">
        {newTasks.map((taskItem, indCheck) => (
          <li
            key={indCheck}
            className="py-1 d-flex justify-content-center items-center"
          >
            {editIndex === indCheck ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border ps-4 p-1 py-3 w-75 rounded b-yellow"
              />
            ) : (
              <div
                className="border bg-light p-1 py-3 ps-4 me-3 w-75 rounded text-start"
                onClick={() => enableEdit(indCheck)}
              >
                {taskItem}
              </div>
            )}

            <span className="d-flex gap-2">
              {editIndex === indCheck ? (
                <button
                  onClick={saveTask}
                  className="bg-green-500 rounded px-3"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => enableEdit(indCheck)}
                  className="bg-yellow-500 rounded px-3 b-yellow"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => delTasks(indCheck)}
                className="bg-red-500  px-3 rounded b-yellow"
              >
                X
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
