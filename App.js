
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
    }
  const [initial,setmode]=useState('light')
  const togglemode =()=>{
      if(initial==='light'){
        setmode('dark')
        document.body.style.backgroundColor = '#042743'
        showalert("dark mode has been enabled","success")
        // document.title="Textutils-Darkmode"
      }
else{
  setmode('light')
   document.body.style.backgroundColor = 'white'
   showalert("light mode has been enabled","success")
  //  document.title="Textutils-Lightmode"
}
  }
 
  return (
    <>
    <Router>
      <Navbar title="TextConverter" place="Home" mode={initial} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About mode={initial}/>} />
          <Route path="/" element={<Form heading="Enter your Text" mode={initial} sendalert={showalert} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
