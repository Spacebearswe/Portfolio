import React, {useState, useEffect} from "react";
import Main from "./Components/Main.jsx";
import Expertise from "./components/Expertise.jsx";
import Project from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <div className="main-container">
            <Main/>
            <Expertise/>
            <Project/>
            <Footer /> 
      </div>
    </>
  )
}

export default App
