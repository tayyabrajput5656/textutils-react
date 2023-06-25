import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

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
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils-Home-DarkMode";

      setInterval(() => {
        document.title = "Textutils-is-Amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Install-Textutils";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "Textutils-Home-LightMode";
    }
  };

  return (
    // <Router>
    <>
    
    <Navbar
      tittle="Textutils"
      AboutText="About Us"
      mode={mode}
      togglemode={toggleMode}
    />

    <Alerts alert={alert} showalert={showAlert} />
    <div className="container my-3">
      <TextForm
        showalert={showAlert}
        text1="Enter Your text here to analyze"
        mode={mode}
      />
      
    </div>
      </>
      );
}

export default App;
