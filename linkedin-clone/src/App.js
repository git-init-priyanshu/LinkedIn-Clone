import { Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import Login from "./components/Login.js";

function App() {
  return( 
  <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Header/>}/>
    </Routes> 
  </div>
  );
}

export default App;
