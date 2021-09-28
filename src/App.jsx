import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Description from "./components/description/Description";
import "./app.scss";
import Animation from "./components/Animation/Animation";





function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro/>
       <Works/>
       <About/>
       <Description/>
       <Contact />
       <Animation/>
     </div>
    </div>
  );
}

export default App;
