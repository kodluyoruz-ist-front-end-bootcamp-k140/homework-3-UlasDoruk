import { GiPowerButton } from "react-icons/gi";
import React,{ useContext, useState } from "react";
import ThemeContext from "../theme/darktheme";

function ButtonSwitch() {

    const {theme,setTheme} = useContext(ThemeContext);
    // const [theme, setTheme] = useState("Dark");

  return (
    <button
      id="button"
      type="button"
      className="btn btn-dark"
      onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
    >
      {<GiPowerButton />}
      <br />
      {theme}
    </button>
  );
}

export default ButtonSwitch