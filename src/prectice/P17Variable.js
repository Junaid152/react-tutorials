import React, { useState } from "react";
// import ToggleSwitch from "./P17ToogleSwitch";

export default function P17Variable() {
  const ToggleSwitch = ({ isOn, handleToogle }) => {
    return (
      <div className={`switch ${isOn ? "on" : "off"}`} onClick={handleToogle}>
        <div className="knob"></div>
      </div>
    );
  };

  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState("light");
  const handleToogle = () => {
    setIsOn(!isOn);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="P17">
      <hr />
      <h2 className="back">P17Variable cssroot variable to set theme</h2>
      <p className="pera">pera adsadadsadasdasdas</p>
      <button onClick={handleToogle} className="rounded">
        {theme === "light" ? "change to Dark theme" : "change to light theme"}
      </button>

      <div className="switch-container">
        <div>
          <i className="fa fa-sun-o"></i>
        </div>
        <ToggleSwitch handleToogle={handleToogle} isOn={isOn} />
        <div>
          {" "}
          <i className="fa fa-moon-o"></i>
        </div>
      </div>
    </div>
  );
}
