import './App.css';
import Orologio from "./components/orologio";
import OrologioZorio from "./components/orologioZorio";
import Galleria from './components/galleria';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Orologio/>
      <OrologioZorio />
      <Galleria/>
      <Login />
    </div>
  );
}

export default App;
