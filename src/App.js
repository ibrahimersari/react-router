import './App.css';

import About from './components/About';
import Users from "./components/users/Users"; 
import Home from "./components/Home";
import Mami from "./components/users/Mami";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <div>
        <nav>
              <Link to="/home">Home</Link>            
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
        </nav>

        
        <Routes>
          <Route path="/about"  element={<About />} />
          <Route path="/users"  element={<Users />} />
          <Route path='/users/mami' element={<Mami />}/>
          <Route path="/home"  element={<Home />} />
        </Routes>
      </div>
    </Router>    
  );
}

export default App;