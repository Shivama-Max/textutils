import Navbar from './components/Navbar.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import { useState } from 'react';
import Alert from './components/Alert.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }


  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark');
      document.body.style.backgroundColor ='#111111';
      document.body.style.color = "#ffffff";
      showAlert("Dark Mode has been set","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.body.style.color = "black";
      showAlert("Light Mode has been set","success");
    }
  }
  return (
    <>
    <Navbar title ="TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert = {alert} />
    <TextForm showAlert = {showAlert} mode = {mode}/>
    <About/>
    </>
  );
}

export default App;
