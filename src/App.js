// import logo from './logo.svg';
import React, { useState,Fragment } from 'react';
import './App.css';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import Textbox from './Component/Textbox';
// import About from './Component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  function togglemode(){
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert('Dark mode has been set','success')
      document.title = 'TextUtils-dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert('light mode has been set','success')
      document.title = 'TextUtils-Light Mode'

    }
  }

  const [alert, setalert] = useState(null)

  function showalert(message,type){
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
     setalert(null) 
    }, 2000);
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = 'navbar' mode = {mode} togglemode = {togglemode} />
    <Alert alert = {alert} />
    <div className='container'>
    {/* <Routes> */}
          {/* <Route path="/about" element = {<About/>}/>
          <Route path="/" element={<Textbox heading='Enter your Text Below' showalert = {showalert} />}/>
          </Routes> */}
          <Textbox heading='Enter your Text Below' showalert = {showalert} />
          </div>
    {/* </Router> */}
            
    </>
  );
}

export default App;
