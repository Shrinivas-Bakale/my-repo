import { useState } from "react";
import "./App.css";
import TextUtils from "./Pages/TextUtils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
// import Alert from "./Pages/Alert";
// import Timeline from "./Pages/Timeline"

function App() {
  const [mode, setMode] = useState("gray-500");
  const [mtext, setMtext] = useState("Enable Dark Mode")

  const toggleMode = () => { 
    if (mode === "gray-900") {
      setMode("gray-500");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled");
      setMtext("Enable Dark Mode")
    } else {
      setMode("gray-900");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled");
      setMtext("Enable Light Mode")
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message);
  };

  return (
    <>
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} mtext={mtext} />
        <Routes>
          <Route
            exact path="/"
            element={
              <TextUtils mode={mode} toggleMode={toggleMode} alert={alert} />
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route
            path="/alert"
            element={<Alert />}
          /> */}
          {/* <Route path="/" element={<Timeline />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
