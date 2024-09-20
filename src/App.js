import React, { useRef } from 'react'
import About from "./Website/about.js"
import Contact from "./Website/contact.js"
import Projects from "./Website/projects.js"
import NavBar from "./Website/navbar.js"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Website/css/stylesheet.css'
import "./App.css"

const App = () => {
  return (
    <div className = "App">
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;