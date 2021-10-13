import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Description from "./components/description/Description";
import Taa from "./components/taa/Taa";
import Extinct from "./components/extinct/Extinct";
import Bounce from "./components/bounce/Bounce";
import Bounce2 from "./components/bounce2/Bounce2";

import "./app.scss";






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
       <Taa />
        <Extinct />
        <Bounce />
        <Bounce2 />


     </div>
    </div>
  );
}

export default App;
