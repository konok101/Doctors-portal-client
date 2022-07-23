
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Navbar from './Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Appoinment from './Pages/Appoinment/Appoinment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'  >
     <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Appoiment' element={<Appoinment/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
