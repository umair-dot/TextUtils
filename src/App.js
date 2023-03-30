import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode,setMode] = useState("light")
  const [alert, setAlert] = useState(null )
  const showAlert = (message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null)
        },1500)
  }

 const toggleMode=()=>{
   if(mode === 'dark'){
    setMode("light")
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode Has been Enabled","success")
    document.title = 'TextUtils - Light-Mode'
    // setInterval(()=>{
    //   document.title = 'TextUtils is Amazing'
    // },1000)
    // setInterval(()=>{
    //   document.title = 'Instal TextUtils Now'
    // },1500)
   }
   else{
    setMode("dark")
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark Mode Has been Enabled","success")
    document.title = 'TextUtils - Dark-Mode'
   }
  }
  return (
   <>
      <BrowserRouter>
          <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
        <div className="container py-3 ">
              <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />} />
               <Route exact path="/about" element={<About />} />
              </Routes>
        </div>
        </BrowserRouter>
   </>
  );
}

export default App;
