import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <div className="App">
        <Navbar title="blagh" mode={mode} toggleMode={toggleMode} />
        <h1>Welcome!</h1>
        <div className="container my-3">
          <TextForm heading="Enter text to analyse" mode={mode}/>
        </div>
        <About />
      </div>
    </>
  );
}

export default App;
