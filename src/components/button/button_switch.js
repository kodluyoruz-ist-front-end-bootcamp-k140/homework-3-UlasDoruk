import { GiPowerButton } from "react-icons/gi";
import React,{ useContext} from "react";
import ThemeContext from "../theme/darktheme";
import "./button.css"

// Bu component Dark/Light theme içindir !!
function ButtonSwitch() {

  const {theme,setTheme} = useContext(ThemeContext);

  return (
    <button
      id="button"
      type="button"
      className="btn btn-dark"
      // "theme" değeri değiştiğinde buton da değişecek
      onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
    >
      {/* Bu component buton iconu için */}
      {<GiPowerButton />}
      <br />
      {theme}
    </button>
  );
}

export default ButtonSwitch