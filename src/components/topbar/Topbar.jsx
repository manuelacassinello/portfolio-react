import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar" >
      <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Manuela Cassinello</a>
            <div className="itemContainer">
              <a href="#works" className="worksT">Work</a>
            </div>
            <div className="itemContainer">
              <a href="#about" className="aboutT">About</a>
            </div>
            <div className="itemContainer">
              <a href="#contact" className="contactT">Contact</a>
            </div>
          </div>
          <div className="right">
            <div className="itemContainer2">
            <a href="https://www.linkedin.com/in/manuelacassinello"className="linkedin">LI</a>
            </div>
            <div className="itemContainer2">
            <a href="https://github.com/manuelacassinello" className="github">GH</a>
            </div>
            <div className="itemContainer2">
              <a href="mailto:mrac.in@icloud.com" className="mail">MAIL</a>
            </div>
            <div className="itemContainer2">
            <a href="https://drive.google.com/file/d/1ZHm6yyxC7KSiD_cYVn_PyewXvzY9gk8i/view?usp=sharing" className="CV">CV</a>
            </div>
          </div>
      </div>
    </div>
  )
}
