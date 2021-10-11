import "./intro.scss"


export default function intro() {
  return (
    <div className="intro" id="intro">
      <h1>Hey</h1>
      <video loop autoPlay muted className="video">
        <source src="https://res.cloudinary.com/manuelacass/video/upload/v1633446122/video_tfkqry.mp4" type="video/mp4" />
      </video>
    </div>
  )

}
