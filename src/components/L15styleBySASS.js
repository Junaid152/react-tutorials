import React from "react";
import classes from "../module/L15.module.css";

export default function StyleBySASS() {
  return (
    <>
      <hr className="mt-5" />
      <div className={classes.newClass}>
        <h2>L15styleByModule included</h2>
        <div>
          s<p>styleBy module</p>
          <p style={{ backgroundColor: "yellow" }}>any text</p>
        </div>
      </div>
    </>
  );
}
