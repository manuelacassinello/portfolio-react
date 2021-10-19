/* eslint-disable jsx-a11y/anchor-has-content */
import "./works.scss"
import Card from 'react-bootstrap/Card';


export default function works() {
  return (
    <div className="works" id="works">



      <div className="list">
          <Card style={{ width: '18rem' }}>
          <a href="#taap" className="taap">
            <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633166027/Screenshot_2021-10-02_at_11.13.11_eeosr2.png" />
          </a>
            <Card.Body>
              <Card.Title>Taa</Card.Title>
              <Card.Text>
                Mobile Web App
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <a href="#extinct" className="extinct">
               <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633541451/Screenshot_2021-10-06_at_19.26.47_ozjqsy.png" />
             </a>
            <Card.Body>
              <Card.Title>Extinct Animals</Card.Title>
              <Card.Text>
                Web App Prototype
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
          <a href="#bounce" className="bouncei">
             <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633168901/Screenshot_2021-10-02_at_12.01.25_lhr3ra.png" />
          </a>
            <Card.Body>
              <Card.Title>Bounce</Card.Title>
              <Card.Text>
              Art Direction / Photography
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
           <a href="#caldera" className="caldera">
             <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1633953939/Mockup_Tarjeta_Visita_a6zoxa.jpg" />
          </a>
            <Card.Body>
              <Card.Title>La Caldera</Card.Title>
              <Card.Text>
                Re-Branding / Art Direction
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className="list2">
        <Card style={{ width: '18rem' }}>
          <a href="#apocalipsis" className="apocalipsisi">
            <Card.Img variant="top" src="https://res.cloudinary.com/manuelacass/image/upload/v1634573873/1_l5ebof.jpg" />
          </a>
          <Card.Body>
            <Card.Title>777</Card.Title>
            <Card.Text>
              Art Direction
            </Card.Text>
          </Card.Body>
        </Card>


      </div>

    </div>

  )
}
