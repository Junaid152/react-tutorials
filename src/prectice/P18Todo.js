import React, { useState } from "react";

export default function P18Todo() {
  const [initialValue, setInitialValue] = useState("");
  const [textArray, setTextArray] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const edit = (index) => {
    setEditIndex(index);
    setEditText(textArray[index]);
  };
  const save = (index) => {
    let copyArray = [...textArray];
    copyArray[index] = editText;
    setTextArray(copyArray);
    setEditIndex(null);
  };

  const update = (e) => {
    setInitialValue(e.target.value);
  };

  const add = () => {
    if (initialValue !== "") {
      setTextArray([...textArray, initialValue]);
      setInitialValue("");
    }
  };
  const del = (index) => {
    let delActivity = textArray.filter((v, i) => index !== i);
    setTextArray(delActivity);
  };
  return (
    <div>
      <input
        className="px-4 py-3 rounded w-75 fs-4"
        type="text"
        value={initialValue}
        onChange={update}
        onKeyDown={(e) => e.key === "Enter" && add()}
      />
      <button className="px-4 py-3" onClick={add}>
        Add Activity
      </button>

      <ul>
        {textArray.length > 0 ? (
          textArray.map((value, index) => (
            <div className="border m-2 fs-5">
              <li key={index}>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                ) : (
                  `${index}) ${value}`
                )}
                <button
                  onClick={() =>
                    editIndex === index ? save(index) : edit(index)
                  }
                >
                  {editIndex === index ? "save" : "edit"}
                </button>
                <button onClick={() => del(index)}>X</button>
              </li>
            </div>
          ))
        ) : (
          <p>enter activity to add here</p>
        )}
      </ul>
    </div>
  );
}
