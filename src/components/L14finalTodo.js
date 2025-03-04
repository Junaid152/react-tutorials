// import React, { useState } from "react";

// function L14finalTodo() {
//   const [numb, setNumb] = useState("");
//   const [newNumb, setNewNumb] = useState([]);
//   //upper only phase 1 add task

//   const addNum = () => {
//     if (numb.trim() !== "") {
//       setNewNumb([...newNumb, numb]);
//       setNumb("");
//     }
//   };
//   return (
//     <>
//       <div>
//         <h2>L14finalTodo phase 1 only add value</h2>
//         <input
//           type="number"
//           value={numb}
//           onChange={(e) => setNumb(e.target.value)}
//         />
//         <button onClick={addNum}>add Num</button>
//       </div>
//       {/* <ul>
//         {newNumb.length > 0 &&
//           newNumb.map((num, index) => <li key={index}>{num}</li>)}
//       </ul> */}
//       <ul>
//         {newNumb.length >= 1 ? (
//           newNumb.map((num, index) => (
//             <li key={index}>
//               val:{num}.. and key:{index} .. len:{num.length}
//             </li>
//           ))
//         ) : (
//           <p>no text is updated</p>
//         )}
//       </ul>
//       {/* <ul>
//         {newNumb.length > 0 ? (
//           newNumb.map((num, index) => <li key={index}>{num}</li>)
//         ) : (
//           <p>No numbers added yet.</p>
//         )}
//       </ul> */}

//       {/* upper only phase 1 i.e add task */}
//     </>
//   );
// }

// export default L14finalTodo;

// phase 2 where 1 is add only ,,, phase 2 insert delete task
import styles from "../module/App.module.css";

import React, { useState } from "react";

export default function L14finalTodo() {
  const todoInputStyle = {
    //   js object styles ===============================
    width: "70%",
    backgroundColor: "yellow",
    color: "red",
  };
  const [start, setStart] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  // const [editButtonState, setEditButtonState] = useState({});

  const updateStart = (e) => setStart(e.target.value);

  const add = () => {
    if (start.trim() !== "") {
      setTasks([...tasks, start]);
      setStart("");
    }
  };

  const remove = (index) => {
    let removedTasks = tasks.filter((_, i) => i !== index);
    setTasks(removedTasks);
  };

  const edit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]); // Store the existing task for editing
  };

  const saveEdit = (index) => {
    let updatedTasks = [...tasks];
    updatedTasks[index] = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  // const toggleEditBtn = (index) => {
  //   setEditButtonState((prev) => ({
  //     ...prev,
  //     [index]: prev[index] === "Save Tasks" ? "Edit Tasks" : "Save Tasks",
  //   }));

  //   if (editIndex === index) {
  //     saveEdit(index); // Auto-save when clicking "Save Task"
  //   } else {
  //     edit(index);
  //   }
  // };

  return (
    <>
      <div>
        {/* //==================================== adding styles ========  as js objec  */}
        <h2 style={todoInputStyle}>L14finalTodos</h2>
        <input
          style={{ backgroundColor: "pink" }} //   adding styles  ===============  inline styles
          type="text"
          value={start}
          placeholder="Enter task"
          onChange={updateStart}
        />
        <button onClick={add}>Add Task</button>
      </div>

      <ul>
        {tasks.length > 0 ? (
          tasks.map((val, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                val
              )}
              <button onClick={() => remove(index)}>Remove Task</button>
              {/* <button onClick={() => toggleEditBtn(index)}>
                {editButtonState[index] || "Edit Task"}
              </button> */}
              <button
                onClick={() =>
                  editIndex === index ? saveEdit(index) : edit(index)
                }
              >
                {editIndex === index ? "Save Task" : "Edit Task"}

                {/* {editButtonState[index] || "Edit Task"} */}
              </button>
            </li>
          ))
        ) : (
          <p className={styles.colblue}>No tasks entered yet</p> // USING APP.MODULE.CSS CLASSSEES ===============
        )}
      </ul>
      <hr />
    </>
  );
}
