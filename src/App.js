import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/state_events";
import About from "./components/About";
import Home from "./components/Home";
import React, { useState } from "react";
import Alert from "./components/Alert";
import SignUpForm from "./components/SignUpForm";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import Routes

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      modetext("Enable Light Mode");
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      modetext("Enable Dark Mode");
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light mode";
    }
  };
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [DLmode, modetext] = useState("Enable Dark Mode")

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          DLmode = {DLmode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/signSeller" element={<SignUpForm userType="seller" />} />
            
            <Route path="/signBuyer" element={<SignUpForm userType="buyer" />}/>

            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <TextForm
                  alert={showalert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/home" element={<Home mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
