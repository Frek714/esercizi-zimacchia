import './App.css';
import Orologio from "./components/orologio";
import OrologioZorio from "./components/orologioZorio";
import Galleria from './components/galleria';
import Ecommerce from './components/wrapper';
import Wrapper from './components/wrapper';
import { Users } from './components/Users';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <div className="App">
      {/* <Orologio/>
      <OrologioZorio />
      <Galleria/> */}
      {/* <Wrapper /> */}
      <Users/>
      <ToDoList/>
    </div>
  );
}

export default App;
