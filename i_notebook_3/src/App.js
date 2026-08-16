// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import NoteState from './context/Notes/Notestate'
import ToggleMode from './components/ToggleMode'
import { useState } from 'react'

import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null)
  const ShowAlt = (message, type) => {
    setAlert({ msg: message, type: type })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const [mode, setMode] = useState("light");
  const lightModebtn = () => {
    setMode('light');
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

  }
  const darkModebtn = () => {
    setMode('dark');
    document.body.style.backgroundColor = "#2d2c2c";
    document.body.style.color = "white";
  }

  return (
    <>

      <NoteState>
        <Navbar ShowAlt={ShowAlt} mode={mode} />
        <ToggleMode mode={mode} lightMode={lightModebtn} darkMode={darkModebtn}/>
        <Alert showmsg={alert} />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home ShowAlt={ShowAlt} mode={mode} />} />
            <Route path="/login" element={<Login ShowAlt={ShowAlt} />} />
            <Route path="/signup" element={<Signup ShowAlt={ShowAlt} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        {/* <h1>This is the Home Buddy!</h1> */}
      </NoteState>
    </>
  );
}

export default App;
