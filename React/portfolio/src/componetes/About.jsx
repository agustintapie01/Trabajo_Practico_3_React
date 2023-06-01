
import { useState } from "react"

 
const About = () => {

  
  const [num, setNum] = useState(1);

  const handleclick = () => {
    // setCurrentimage((prevImage)=>(prevImage+ 1) % images.length);
   num > 2 ? setNum(1) :  setNum(num + 1)
  }


  return (
    <>
        <main className="main_about">
                
                <h1>Perritos graciosos</h1>

                <div className="contenedor_about">
                    <img className="img_about2" src={`/${num}.jpg`} alt="" />
                </div>
                    <button className="boton_about" onClick={handleclick}>Cambiar imagen</button>
                    
        </main>    
    
    </>
  )
}

export default About