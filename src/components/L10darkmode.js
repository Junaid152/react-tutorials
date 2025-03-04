import React, { useState } from "react";
// @import "bootstrap"; // Import Bootstrap's SCSS
import "../App.css";

export default function L10darkmode() {
  //   let arrow = document.getElementsByClassName(".accordion-button::after");
  const [darkBtnText, setDarkBtnText] = useState("Enable Dark Mode");

  const [darkStyle, setDarkStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const enableDark = () => {
    if (darkStyle.color === "black") {
      setDarkStyle({
        backgroundColor: "black",
        color: "white",
      });
      setDarkBtnText("Enable Dark Mode");
      //   arrow.style.color = "white";
      //   arrow.style.backgroundColor = "white";
      // $accordion-icon-color:'white'; // Custom color
    } else {
      setDarkStyle({
        backgroundColor: "white",
        color: "black",
      });
      setDarkBtnText("Disable Dark Mode");
    }
  };
  //   const combinedStyle = Object.assign(darkStyle, { borderRadius: "10px" });

  return (
    <>
      <hr></hr>
      <h1>L10 dark mode</h1>
      <div
        className="container my-3"
        // style={{ border: "1px solid grey", borderRadius: "10px" }}
        // style={combinedStyle}
        style={darkStyle}
      >
        <div className="accordion my-3" id="accordionFlushExample">
          <div className="accordion-item" style={darkStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={darkStyle}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={darkStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={darkStyle}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={enableDark}
        type="button"
        className="mx-1 my-2 p-3"
        style={darkStyle}
      >
        {darkBtnText}
      </button>
    </>
  );
}
