// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";

// import Head from "./components/L0header";
import L5boot from "./components/L5bootstrap";
import "./components/L6module1.mjs";
import "./components/L6module2.mjs";
import "./components/L7useState";
import L7usestat from "./components/L7useState";
import L10darkmode from "./components/L10darkmode";
import L7PrecUsestate from "./components/L7PrecUsestate";
import L13alert from "./components/L13alert";
import TodoApp from "./components/L13zTodoApp";
import EditTask from "./components/L14EditTask";
import L14finalTodo from "./components/L14finalTodo";
import StyleBySASS from "./components/L15styleBySASS";
import PrecTodoDel from "./prectice/P16todoprecDel";
// import P17Variable from "./prectice/P17Variable";
import P18Todo from "./prectice/P18Todo";
import L13ztodoPrec from "./components/L13ztodoprec";
import L13ztodoprec2 from "./components/L13ztodoprec2";
import P17Variable from "./prectice/P17Variable";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// test

function App() {
  const [isDark, setIsDark] = useState(false);

  const darkTheme = () => {
    setIsDark(!isDark);
  };

  const [onAlert, setOnAlert] = useState(null);
  const showAlert = (message, type) => {
    setOnAlert({ msg: message, ty: type });
    setTimeout(() => {
      setOnAlert(null);
    }, 2000);
  };

  const [navMode, setNavMode] = useState("light");
  const modeSwitch = () => {
    if (navMode === "light") {
      setNavMode("dark");
      showAlert("show alert dark mode is on ", "success");
    } else {
      setNavMode("light");
      // showAlert("show alert light mode is on ", "warning");
      console.log("1");
    }
  };

  return (
    // <Router>
    <div className={`App ${isDark ? "bg-dark text-white" : ""}`}>
      <button
        id="darkBtn"
        type="button"
        className="btn btn-dark ms-5"
        onClick={darkTheme}
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <L13alert alert={onAlert} />

      <P17Variable />

      <L5boot
        title="myPropsTitle L7 text transform"
        mode={navMode}
        modeSw={modeSwitch}
      />

      {/* <Routes>
          <Route path="/basic" element={<Head />} />
          <Route
            path="/text"
            element={ */}
      <div>
        <L7PrecUsestate showAlert={showAlert} />{" "}
        <L7usestat
          mode={navMode}
          heading="L7 use state to change text transform"
        />{" "}
        <L10darkmode /> <hr />
        <h3>
          set colors so when click on it theme or background will be change to
          that color
        </h3>
        <h3>
          in L7prec when space is give nin text area the word count is increased
          set it so same num of words will b shown
        </h3>
      </div>
      {/* }
          />
          <Route
            path="/todo"
            element={ */}
      <div>
        <P18Todo /> <TodoApp />
        <L13ztodoPrec />
        <L13ztodoprec2 />
        <EditTask />
        <L14finalTodo />
        <StyleBySASS />
        {/* for all prec in last of section div ========================================================== */}
        <PrecTodoDel />
      </div>
      {/* }
          />
          <Route path="/mode" element={<P17Variable />} />
        </Routes> */}
    </div>
    // </Router>
  );
}

export default App;
