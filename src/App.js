import { useState } from 'react';
import { GiPowerButton } from "react-icons/gi";
import './App.css';
// import Todos  from './components/Todos/data';
import Navbar from './components/NavBar/navbar';
import Posts from './components/Posts/posts';
import Button from './components/button/button';
import Todo_Class from './components/Todos/data_cls';

function App() {
  const [check, setCheck] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <button id="button" type="button" className="btn btn-dark">
        <GiPowerButton />
      </button>
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
      {check == true ? <Todo_Class /> : <Posts />}
    </div>
  );
}

export default App;
