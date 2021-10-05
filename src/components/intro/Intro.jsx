import "./intro.scss"


export default function intro() {
  return (
    <div className="intro" id="intro">
      <video loop autoPlay muted className="video">
        <source src="https://res.cloudinary.com/manuelacass/video/upload/v1633446122/video_tfkqry.mp4" type="video/mp4" />
      </video>
    </div>
  )

}
// I want to put the animation Untitled2.glft here in as full page - I made, imported it in public/assets. I created a file called animation.js and I dont know if it is working.
