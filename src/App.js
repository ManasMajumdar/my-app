import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React, { useState } from 'react';
function App() {

  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
  }

  return (
   <>
   {/* <Navbar title = "MyApp2" aboutText="About Text" /> */}
   {/* <Navbar title = "MyApp2" /> - if we send one thing than other things its takes from default props*/}
   {/* <Navbar/> - if we want to pass default propTypes */}
   <Navbar title= "MyApp" mode = {mode} toggleMode = {toggleMode} />
   <Alert alert = {alert} />
   <div className="container">
   <TextForm heading="Enter the text to analyze below"  mode = {mode}  /> 
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
