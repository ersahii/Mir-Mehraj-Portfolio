import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Resume from "./Resume";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import '../styles/App.css';
function App() {
  return (<>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;