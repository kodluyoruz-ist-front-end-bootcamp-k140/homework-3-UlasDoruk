import { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/navbar';
import Posts from './components/Posts/posts';
import Button from './components/button/button';
import Todo_Class from './components/Todos/data_cls';
import {DarkTheme} from './components/theme/darktheme';
import ButtonSwitch from './components/button/button_switch';

function App() {
  const [check, setCheck] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <DarkTheme>
        <ButtonSwitch/>
      </DarkTheme>
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
      {check === true ? <Todo_Class /> : <Posts />}
    </div>
  );
}

export default App;
