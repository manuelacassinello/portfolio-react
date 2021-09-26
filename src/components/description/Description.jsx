import "./description.scss"

export default function Description() {
  return (
    <div className="description" id="description">
      <div className="hey">
        <div className="box">
        <h1> I design experiences.</h1>
        </div>
        <h2>This is Manuela Cassinello. Graduate Frontend Developer & Graphic design student based in Barcelona.
        </h2>
        <h3>I like to create experiences that solve complex problems and have a positive impact on users and the planet.</h3>
        <div className="profilepic" >
          <img src="assets/profile.jpg" alt="ro"></img>
        </div>
      </div>
      <div className="iconblack">
        <a href="#contact">
          <img src="assets/icon-black.png" alt="down arrow"></img></a>
      </div>
    </div>
  )
}
