import { useState } from "react";
import React from "react";

export default function L7PrecUsestate(props) {
  const [someText, setSomeText] = useState("");

  const textChange = (event) => {
    setSomeText(event.target.value);
  };

  const clearFunc = () => {
    console.log("clicked on clear button");
    let emptyText = "";
    setSomeText(emptyText);
    props.showAlert("text is cleared", "danger");
  };

  const uppercaseFunc = () => {
    let upper = someText.toUpperCase();
    setSomeText(upper);
    props.showAlert("text is lowercasex", "light");
  };
  const lowercaseFunc = () => {
    let lower = someText.toLowerCase();
    setSomeText(lower);
    props.showAlert("text is uppercase", "primary");
  };
  const spaceFunc = () => {
    let space = someText.split(/[ ]+/);
    setSomeText(space.join(" "));
  };
  const copyFunc = () => {
    let copy = someText;
    navigator.clipboard.writeText(copy);
    props.showAlert("text is coipied", "info");

    // let copy = someText.value;
    // navigator.clipboard.writeText(copy);
  };

  // const [darkBtnText, setDarkBtnText] = useState("Enable Dark Theme");

  const [darkStyle] = useState({
    backgroundColor: "black",
    color: "white",
  });
  // const darkEnable = () => {
  //   if (darkBtnText === "Enable Dark Theme") {
  //     setDarkBtnText("Disable Dark Theme");
  //     setDarkStyle({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //   } else {
  //     setDarkBtnText("Enable Dark Theme");
  //     setDarkStyle({
  //       backgroundColor: "grey",
  //       color: "black",
  //     });
  //   }
  // };
  const [darkCol, setDarkCol] = useState(false);
  const darkEnable = () => {
    setDarkCol(!darkCol);
  };

  return (
    <>
      <hr className="mt-5" />
      <h1>L7 and 10 prec useState for change text and dark mode</h1>

      <div className="form-floating text-center">
        <div className="container">
          <textarea
            className="form-control mx-auto mb-3"
            placeholder="Enter Text to transform"
            id="floatingTextarea2"
            style={{ height: "100px", width: "80%" }}
            // style={darkStyle}
            value={someText}
            onChange={textChange}
          >
            {/* {someText} */}
          </textarea>
          {/* <label htmlFor="floatingTextarea2">Enter text here to transform</label> */}
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary me-2"
        onClick={clearFunc}
      >
        Clear
      </button>
      <button
        type="button"
        className="btn btn-light me-2"
        onClick={uppercaseFunc}
      >
        Upper
      </button>
      <button
        type="button"
        className="btn btn-light me-2"
        onClick={lowercaseFunc}
      >
        Lower
      </button>
      <button type="button" className="btn btn-light me-5" onClick={spaceFunc}>
        Remove Spaces
      </button>
      <button type="button" className="btn btn-light me-5" onClick={copyFunc}>
        COPY TEXT
      </button>
      <button
        id="btn"
        type="button"
        className={`btn ms-5 ${darkCol ? "btn-light" : "btn-dark"}`}
        onClick={darkEnable}
        // style={darkStyle}
      >
        {/* {darkBtnText} */}
        {darkCol ? "Disabel Dark" : "Enable Dark"}
      </button>

      <div className="container">
        <div className="container my-3 border py-5">
          <div style={{ width: "90%", fontSize: "20px", maxWidth: "90%" }}>
            {someText.length > 0
              ? someText
              : "enter text upper to preview here"}
          </div>
        </div>
        <h3>
          <div>
            <h6>
              Total alphabets ={" "}
              {someText.length - someText.split(" ").length + 1}
            </h6>
            <h6>Total words = {someText.split(" ").length} </h6>
            <h6>
              Avg Time Req to Read = ({0.008 * someText.split(" ").length})
              minuts
            </h6>
          </div>
        </h3>
      </div>
    </>
  );
}
