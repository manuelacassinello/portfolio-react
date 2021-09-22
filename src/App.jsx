import Topbar from "./components/topbar/Topbar";
import React, { useState } from 'react'
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { Trail } from './components/Trail/Trail.jsx'


function App() {

  const [open, set] = useState(true)

  return (
    <div className="app">

     <Topbar/>

     <div className="sections">

     <div className="fancy-text">
     
     <Trail open={open} onClick={() => set((state) => !state)}>
      <span>Its</span>
      <span>Manuela</span>
      <span>Cassinello</span>
      <span>Desing</span>
    </Trail>
    
     </div>

     
       
       <Portfolio/>

       <Works/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
