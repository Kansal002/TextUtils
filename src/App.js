import { useState } from 'react';
import './App.css';
// import Accordion from './components/Accordion';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
  // import {  // router se ham bina page ko reload kiye and uske kuch components change kr skte hai. ex- like navbar nahi hata  
  //   BrowserRouter as Router, // react router sahi se kaam nahi krta hai github pages ke saath 
  //   Routes,
  //   Route,
  //   Link
  // } from "react-router-dom";
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1400);
  }
  const [mode,setMode] = useState('light');// dark mode enable or not
  const [text,updateText]=useState("Enable Dark Mode");
  const changeColor=()=>{  
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#542754';
      updateText("Disable Dark Mode");
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateText("Enable Dark Mode");
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    // return ke baad jo hota hai use JSX khte hai. Basically ye HTML hi hai on the face of js 
    // <></>  esse tum aur bhi divs bana skte ho
    <> 
        {/* <Router>  */}
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} changeColor={changeColor} text={text}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <Routes>    */}
          {/* <Route path="/about" element={<Accordion/>} /> about me router use ho raha esliye abhi ke liye comment out kr dia
          <Route path="/" element={<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />} /> */}
        {/* </Routes> */}
      </div>
  {/* //  </Router> */}
    </>
    // react single page application hoti hai
   
  );
}

export default App;
