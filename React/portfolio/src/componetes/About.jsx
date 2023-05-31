import agu from "../assets/agu.jpg"
import { useState } from "react"
import autito2 from "../assets/autito2.jpg"
 
const About = () => {

  
  const [num, setNum] = useState(0);

  const handleclick = () => {
    // setCurrentimage((prevImage)=>(prevImage+ 1) % images.length);
    setNum(num+1)
  }


  return (
    <>
        <main className="main_about">
                <img src={agu} alt="" className="img_about"/>
                <h1>Mis trabajos</h1>

                <div className="contenedor_about">
                    <h2>{num}</h2>
                    <img src={autito2} alt="imagen cambiante" />
                    <button onClick={handleclick}>Cambiar imagen</button>
                </div>
        </main>    
    
    </>
  )
}

export default About