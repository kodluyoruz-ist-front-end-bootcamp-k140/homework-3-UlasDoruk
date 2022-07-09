import { GiPowerButton } from "react-icons/gi";
import React,{ useContext} from "react";
import ThemeContext from "../theme/darktheme";
import "./button.css"

function ButtonSwitch() {

  const {theme,setTheme} = useContext(ThemeContext);

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