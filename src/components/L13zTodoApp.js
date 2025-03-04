import React, { useState } from "react";
// import styles from "App.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [newTasks, setnewTasks] = useState([]);

  const addTask = () => {
    // if (task.trim() !== "") {
    setnewTasks([...newTasks, task]); //... Creates a new copy of the newTasks array.
    setTask(""); // Clear input after adding

    // }
  };

  const delTasks = (del) => {
    const newList = newTasks.filter((_, i) => i !== del);
    setnewTasks(newList);
  };

  const editTasks = (index) => {
    const editOld = newTasks.filter((allTasks, i) => i === index);
    console.log(editOld);
    setnewTasks(editOld);
  };
  // const callEditTasks = () => {
  //   return editTasks();
  // };

  return (
    <>
      <div className="p-5 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-3">To-Do App</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border p-2 flex-grow"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)} //is used to get the current value of an input element when an event (like onChange) is triggered.
            //Refers to the element that triggered the event. For example, if a <INPUT> is changed, the event.target will point to that <INPUT> element.
          />

          <button onClick={addTask} className="bg-blue-500 px-4 py-2 ">
            Add
          </button>
        </div>
        {/* ok code  for add only*/}
        {/* <ul className="list-disc pl-5">
          {newTasks.map((taskAll) => (
            <li className="py-1">{taskAll} </li>
          ))}
        </ul> */}

        {/* ok code for add and remove*/}
        {/*    
        <ul className="list-disc pl-5">
          {newTasks.map((taskAll, index, allArray) => (
            <li key={index} className="py-1">
              index={index}, Task: {taskAll}
              <button onClick={() => delTasks(index)}>X</button>
            </li>
          ))}
        </ul> */}

        <ul className="list-disc pl-5">
          {newTasks.map((taskAll, index, allArray) => (
            <>
              <li key={index} className="py-1">
                index={index}, Task: {taskAll}
                {/* <button onClick={() => editTasks(index)}>=</button> */}
                <button onClick={() => editTasks(index)}>=</button>
                <button onClick={() => delTasks(index)}>X</button>
              </li>

              {/* <div>{callEditTasks(index)}</div> */}
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

// style todo app
