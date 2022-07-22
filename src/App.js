import './App.css';
import Navbar from './components/NavBar/navbar';
import { DarkTheme} from "../src/components/theme/darktheme";
import Container from './components/container/container';

function App() {

  return (
    <div>
      <Navbar />
      <DarkTheme>
        <Container/>
      </DarkTheme>
    </div>
  );
}

export default App
