import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } 
  };

  const modeRed = () => {
    // setMode('red');
    document.body.style.backgroundColor = 'red';
  }

  const modeYellow = () => {
    // setMode('red');
    document.body.style.backgroundColor = 'yellow';
  }

  const modeGreen = () => {
    // setMode('red');
    document.body.style.backgroundColor = 'green';
  }

  return (
    <>
      <Router>
        <Navbar title="blagh" mode={mode} toggleMode={toggleMode} modeRed={modeRed} modeGreen={modeGreen} modeYellow={modeYellow}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter text to analyse"
                mode={mode}
              />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
