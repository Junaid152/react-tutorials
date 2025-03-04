import React from "react";

export default function L13alert(props) {
  return (
    props.alert && (
      <div className="container">
        <div
          className={`alert alert-${props.alert.ty} alert-dismissible fade show`}
          role="alert"
        >
          {props.alert.msg}, {props.alert.ty}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}
