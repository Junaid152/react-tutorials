// import React, { useState } from "react";

// export default function PrecTodoDel() {
//   const [initial, setInitial] = useState("");
//   const [textArr, setTextArr] = useState([]);

//   const [editIndex, setEditIndex] = useState(null);
//   const [editText, setEditText] = useState("");

//   const textinsert = (e) => {
//     setInitial(e.target.value);
//   };

//   const AddText = () => {
//     if (initial.trim() !== "") {
//       setTextArr([...textArr, initial]);
//       setInitial(""); // ✅ Clears the input after adding text
//     }
//   };

//   const Del = (index) => {
//     let delArr = textArr.filter((val, i) => i !== index);
//     setTextArr(delArr);
//   };

//   const edit = (index) => {
//     setEditIndex(index);
//     setEditText(textArr[index]);
//   };

//   const saveEdit = (index) => {
//     let copyTextArr = [...textArr];
//     copyTextArr[index] = editText;
//     setTextArr(copyTextArr);
//     setEditIndex(null);
//   };

//   return (
//     <>
//       <div>Prec Todo with Del</div>
//       <input type="text" value={initial} onChange={textinsert} />
//       <button onClick={AddText}>Add Text</button>
//       <ul>
//         {textArr.length > 0 ? (
//           textArr.map((val, index) => (
//             <li key={index}>
//               {editIndex === index ? (
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                 />
//               ) : (
//                 `value is ${val} AND INDEX ${index} `
//               )}

//               <button onClick={() => Del(index)}>Del</button>
//               <button
//                 onClick={() =>
//                   editIndex === index ? saveEdit(index) : edit(index)
//                 }
//               >
//                 {editIndex === index ? "Save Task" : "Edit Task"}
//               </button>
//             </li>
//           ))
//         ) : (
//           <p>enter Todo List to update</p>
//         )}
//       </ul>
//     </>
//   );
// }

import React, { useState } from "react";
import classes from "../module/precP16.module.css";

export default function PrecTodoDel() {
  const [initial, setInitial] = useState("");
  const [textArray, setTextArray] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  //enable change in input area
  const changeFunc = (e) => {
    setInitial(e.target.value);
  };
  // add or insert text/activity(const initial) to const textArray
  const addActivity = () => {
    setTextArray([...textArray, initial]);
    setInitial("");
    console.log(textArray, initial);
  };
  //delete activity
  const deleteActivity = (index) => {
    const deleted = textArray.filter((v, i) => index !== i);
    setTextArray(deleted);
  };

  const editActivity = (index) => {
    setEditIndex(index);
    setEditText(textArray[index]);
  };
  const saveActivity = (index) => {
    let copyArray = [...textArray];
    copyArray[index] = editText;
    setTextArray(copyArray);
    setEditIndex(null);
  };

  // const backChange = () => {
  //   console.log("backChange Function is clicked");
  // };

  //for theme color change
  const [navMode, setNavMode] = useState("light");
  const modeSwitch = () => {
    if (navMode === "light") {
      setNavMode("dark");
      // showAlert("show alert dark mode is on ", "success");
    } else {
      setNavMode("light");
      // showAlert("show alert light mode is on ", "warning");
    }
  };
  return (
    <div
      className={`${classes.P16Parent} rounded text-${
        navMode === "dark" ? "light" : "dark"
      } bg-${navMode}`}
    >
      <hr className="mt-5" />
      <div>
        <h2
          // className={` me-2  text-${
          //   navMode === "dark" ? "light" : "dark"
          // } bg-${navMode}`}
          className={` d-flex ms-5`}
        >
          {" "}
          Prec P16todo PrecTodo with del and edit and save
          {/* <input
            type="checkbox"
            className="btn-check"
            id="btn-check-outlined"
            autocomplete="off"
          /> */}
          {/* <label className="form-check-label">Theme</label>
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            mode={navMode}
            onClick={modeSwitch}
          /> */}
          <span className="ms-auto">
            {navMode === "light" ? "change to dark" : "change to light"}
          </span>
          <div className=" form-switch  ">
            <input
              className={`form-check-input bg-${navMode}`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              mode={navMode}
              onClick={modeSwitch}
            />
            {/* <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">
              0
            </label> */}
          </div>
          {/* <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          /> */}
        </h2>
      </div>
      <input
        className={` rounded px-4 py-2 text-${
          navMode === "dark" ? "light" : "dark"
        } bg-${navMode}`}
        type="text"
        value={initial}
        placeholder="Enter Todo Activities Here"
        onChange={changeFunc}
        onKeyDown={(e) => {
          // e.key === "Enter" && addActivity();           //         also ok in short
          if (e.key === "Enter") {
            addActivity();
          }
          // if (e.key === "Backspace") {
          //   setInitial("");
          // }
        }}
      />
      <button onClick={addActivity} className="rounded py-2">
        Add Activity
      </button>

      <ul>
        {textArray.length > 0 ? (
          textArray.map((value, index) => (
            <li className="d-flex gap-2 py-1" key={index}>
              {editIndex === index ? (
                <input
                  className="w-75 rounded"
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              ) : (
                <div className="w-75 border">
                  {` ${index + 1} )  ${value} `}
                </div>
              )}

              <button onClick={() => deleteActivity(index)}>
                Delete Activity
              </button>
              <button
                onClick={() =>
                  editIndex === index
                    ? saveActivity(index)
                    : editActivity(index)
                }
              >
                {editIndex === index ? "Save Activity" : "Edit Activity"}
              </button>
            </li>
          ))
        ) : (
          <h4
            style={{
              backgroundColor: "pink",
            }}
          >
            enter Todo Activity above
          </h4>
        )}
      </ul>
      <hr className="my-5" />
    </div>
  );
}

//for last h4
// width: "18%",
// textAlign: "left",
// margin: "0  auto",
