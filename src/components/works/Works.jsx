/* eslint-disable jsx-a11y/anchor-has-content */
import "./works.scss"
import Card from 'react-bootstrap/Card';


export default function works() {
  return (
    <div className="works" id="works">

      <h1>PROJECTS</h1>
      <h2> 01 Taa |  02 Extinct Animals | 03 Bounce |  04 La Caldera </h2>
      <div className="list">
          <Card style={{ width: '18rem' }}>
          <a href="#taap" className="taap">
            <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633166027/Screenshot_2021-10-02_at_11.13.11_eeosr2.png" />
          </a>
            <Card.Body>
              <Card.Title>Taa</Card.Title>
              <Card.Text>
                Web App
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633541451/Screenshot_2021-10-06_at_19.26.47_ozjqsy.png" />
            <Card.Body>
              <Card.Title>Extinct Animals</Card.Title>
              <Card.Text>
                Web App Prototype
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633168901/Screenshot_2021-10-02_at_12.01.25_lhr3ra.png" />
            <Card.Body>
              <Card.Title>Bounce</Card.Title>
              <Card.Text>
              Art Direction / Photography
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633953939/Mockup_Tarjeta_Visita_a6zoxa.jpg" />
            <Card.Body>
              <Card.Title>La Caldera</Card.Title>
              <Card.Text>
                Re-Branding / Art Direction
              </Card.Text>
            </Card.Body>
          </Card>
      </div>

    </div>

  )
}
