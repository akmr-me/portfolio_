import React, { useState } from "react";
import "./App.css";
import Intro from "src/pages/Intro";
import About from "src/pages/About";
import Skills from "src/pages/Skills";
import Projects from "src/pages/Projects";
import Message from "src/pages/Message";
import { AlertTypes } from "src/config/types";
import Navbar from "src/components/Navbar";
import projects from "./info/projects";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import IconButton from "@mui/material/IconButton";
import MyAlert from "src/components/MyAlert";

function App() {
  const [visibility, setVisibility] = useState(false);
  const [alert, setAlert] = useState<AlertTypes>({
    open: false,
    message: "",
    type: "info",
  } as AlertTypes);

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  React.useEffect(() => {
    const visible = () => {
      const scroll = document.documentElement.scrollTop;
      if (scroll > window.screen.availHeight) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };
    window.addEventListener("scroll", visible);
    return () => window.removeEventListener("scroll", visible);
  }, []);

  return (
    <div className="App">
      <Navbar setAlert={setAlert} />
      <MyAlert alert={alert} setAlert={setAlert} />
      <Intro />
      <About myClass="next" setAlert={setAlert} />
      <Skills myClass="box" />
      <Projects myClass="next" projectSlice={projects.slice(0, 2)} />
      <Projects myClass="box" projectSlice={projects.slice(2, 4)} />
      <Message myClass="next" setAlert={setAlert} />
      {visibility && (
        <IconButton
          className="scroll-top"
          onClick={moveToTop}
          size="large"
          color="secondary"
        >
          <ArrowCircleUpOutlinedIcon fontSize="large" />
        </IconButton>
      )}
    </div>
  );
}

export default App;
