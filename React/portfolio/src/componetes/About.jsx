
import { useState } from "react"
import agu from "../assets/agu.jpg"
import Button from 'react-bootstrap/Button';
 

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';


 
const About = () => {

  
  const [num, setNum] = useState(1);

  const handleclick = () => {
   num > 5 ? setNum(1) :  setNum(num + 1)
  }


  return (
    <>

        <h3 className="h3_about">Lenguajes aprendidos</h3> 
          <div className="contenedor_caja">
        <div className="caja1"> 
              <MDBCard>
            <MDBCardImage src={agu} position='top' alt='...' />
            <MDBCardBody>
            </MDBCardBody>
          </MDBCard>

        </div>

        <div className="caja2">

        <MDBCard>
            <MDBCardImage src={`/${num}.jpg`} position='top' alt='...' />
            <MDBCardBody>
              
              <Button onClick={handleclick} variant="primary">Cambiar</Button> 
              
            </MDBCardBody>
          </MDBCard>

        </div>

          </div>




    
    </>
  )
}

export default About