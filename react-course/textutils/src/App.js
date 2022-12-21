import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import React from 'react'
import Alert from './Components/Alert';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showalert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");

    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <TextForm heading="Analyze your text" mode={mode} showalert={showalert}/>
    <About/>
    </>
  );
}

export default App;
