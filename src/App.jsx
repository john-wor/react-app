import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setmode]= useState('light');
  const [alert,setalert]=useState(null);

  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500);
  }
 const tooglemode=()=>{
    if(mode==='light'){
      setmode("dark");
      document.body.style.backgroundColor = "#002D62";
      showalert("Dark mode has been enable","success")
      document.title = "textutils + dark mode ";
      
      // setInterval(() => {
      //   document.title = "textUtils is Amazing Mode";
        
      // }, 2000);
      // setInterval(() => {
      //   document.title = "install textutils";
        
      // }, 1500);
      
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enable","success")
      document.title = "textutils + light mode ";
    }
  }
  return (
    <>
   
    {/* <Router> */}
        
          <Navbar title="Websites" mode={mode} togglemode={tooglemode}/>
          <Alert showalert={showalert} alert={alert}/>
         <div className='container my-3'> 
         {/* <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="/"element={<TextForm showalert={showalert} mode={mode}/>}/>
         </Routes> */}
         <TextForm showalert={showalert} mode={mode}/>
  </div>
  {/* </Router> */}
 

</>
  );

}

export default App;
