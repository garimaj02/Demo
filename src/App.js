// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contacts from './components/Contacts.jsx';
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
  AOS.init();
  },[])

  return (
       <>
       <Navbar />
       <div className="container">
       <Home />
       <Experience />
       <Skills />
       <Projects />
       <Contacts />
       </div>
       </>
   
  );
}

export default App;
