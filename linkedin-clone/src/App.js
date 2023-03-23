import { Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login.js";

function App() {
  return( 
  <div className="App">
    <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/" element={<><Header/><Home/></>}/>
    </Routes> 
  </div>
  );
}

export default App;
