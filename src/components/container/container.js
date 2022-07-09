import { useContext, useState } from "react";
import ButtonSwitch from "../button/button_switch";
import Posts from "../Posts/posts";
import Button from "../button/button";
import TodoClass from "../Todos/data_cls";
import ThemeContext from "../theme/darktheme";

// App.js kalabalığını temizleyip ayrı bi component yarattık
function Container() {
  const { theme } = useContext(ThemeContext);
  const [check, setCheck] = useState(true);

  return (
    // Arka temayı değiştirdiğimiz yer burası 
    <div className={`App ${theme === "Dark" ? "dark" : ""}`}>
      <ButtonSwitch />
      <Button
        style={{
          position: "absolute",
          left: 5,
          top: 60,
        }}
        onClick={() => setCheck(false)}
      >
        POSTS
      </Button>
      <Button
        style={{
          position: "absolute",
          left: 100,
          top: 60,
        }}
        onClick={() => setCheck(true)}
      >
        TODOS (cls)
      </Button>
      {check === true ? <TodoClass /> : <Posts />}
    </div>
  );
}

export default Container;
