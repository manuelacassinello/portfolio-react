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
import Caldera from "./components/caldera/Caldera";
import Caldera2 from "./components/caldera2/Caldera2";
import "./app.scss";






function App() {
  return (
    <div className="app">
     <Topbar/>
     <div className="sections">
       <Intro/>
       <Works/>
        <Taa />
        <Extinct />
        <Bounce />
        <Bounce2 />
        <Caldera />
        <Caldera2 />
       <About/>
       <Description/>
       <Contact />



     </div>
    </div>
  );
}

export default App;
