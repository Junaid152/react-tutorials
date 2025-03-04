import React, { useState } from "react";

const L7usestat = (props) => {
  //loweer case functoin
  const textClear = () => {
    let clearText = "";
    setText(clearText);
  };

  // upper case function
  const textUpperCase = () => {
    // console.log("uppercase button clicked");
    // setText("");
    let newUpperText = text.toUpperCase();
    setText(newUpperText);
  };

  // Lower case function
  const textLowerCase = () => {
    // console.log("Lowercase button clicked");
    // setText("");
    let newLowerText = text.toLowerCase();
    setText(newLowerText);
  };

  const OnChanges = (event) => {
    // console.log("uppercase on change clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("enter text here to transform text");
  return (
    <>
      <div
        className="container my-3"
        style={{ width: "90%", fontSize: "20px", maxWidth: "90%" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            enter the text to change it form like upper case or lower case
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={OnChanges}
            value={text}
          ></textarea>
          <button
            onClick={textClear}
            type="button"
            className="btn btn-primary mx-1 my-2"
          >
            Clear
          </button>
          <button
            onClick={textUpperCase}
            type="button"
            className="btn btn-dark mx-1 my-2"
          >
            Upper Case
          </button>
          <button
            onClick={textLowerCase}
            type="button"
            className="btn btn-dark mx-1 my-2"
          >
            Lower Case
          </button>
        </div>
      </div>
      <div className="container">
        <h3>
          <div>
        
            <h6>
              Total alphabets = {text.length - text.split(" ").length + 1}
            </h6>
            <h6>Total words = {text.split(" ").length} </h6>
            <h6>
              Avg Time Req to Read = ({0.008 * text.split(" ").length}) minuts
            </h6>
          </div>
        </h3>
        <div className="container my-3 border py-5">
          <div style={{ width: "90%", fontSize: "20px", maxWidth: "90%" }}>
            {text.length > 0 ? text : "enter text upper to preview here"}
          </div>
        </div>
      </div>
    </>
  );
};

export default L7usestat;
