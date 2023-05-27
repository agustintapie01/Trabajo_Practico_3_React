import Header from "../componetes/Header"
import Main from "../componetes/Main"
import Footer from "../componetes/Footer"
import agugai from "../assets/agu.jpg"




export const Home = () => {
  
  const nombre = "Agustin Tapie"
  const facultad = "universidad tecnologica de san miguel de tucuman"
  const lenguajes = "c++, sql ,js ,html ,css ,react"

  const alumno={nombre: "Marcelo Agustin", apellido:"Tapie",legajo:55572,dni:43499682,celular:3814432280,hobby:"soy profesional en rushear b en dust2", edad:21, deporte:" rugby desde chico", trabajo:"no hago nada", foto_carnet:agugai, estudio:"De prgramacion en la Facultad tecnologica Frt San Miguel de Tucuman"}


  

  return (
    <>
        <Header/>
        <Main nombre={nombre} facultad={facultad} lenguajes ={lenguajes} alumno={alumno}/>
        <Footer/>
        
    </>
  )
}

export default Home