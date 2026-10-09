import React, {useState, useEffect} from "react";
import Main from "./Components/Main.jsx";
import Expertise from "./components/Expertise.jsx";
import Project from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

// import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  // const [mode, setMode] = useState('light');
  // const handleModeChange = (newMode) => setMode(newMode);

  return (
    <>
    {/* <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}> */}
      {/* <div className={`main-container`}> */}
      <div className="main-container">
      {/* <Navigation parentToChild={{mode}} modeChange={handleModeChange}/> */}
        {/* <FadeIn transitionDuration={700}> */}
            <Main/>
            <Expertise/>
            {/* <Timeline/> */}
            <Project/>
            {/* <Contact/> */}
        {/* </FadeIn> */}
         <Footer /> 
    </div>
    </>
  )
}

export default App
