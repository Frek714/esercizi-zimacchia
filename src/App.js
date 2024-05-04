import logo from './logo.svg';
import './App.css';
import Orologio from "./components/orologio";
import OrologioZorio from "./components/orologioZorio";
import Galleria from './components/galleria';

function App() {
  return (
    <div className="App">
      <Orologio/>
      <OrologioZorio />
      <Galleria/>
    </div>
  );
}

export default App;
