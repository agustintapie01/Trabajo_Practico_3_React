
import { Link } from 'react-router-dom';
import agu from '../assets/agu.jpg'

export const Header = () => {
  return (
    <>
        
             <header id='header'>
                    <img id='foto_header' src={agu} alt="" /> 
              <div className='nav'>
                  <nav className="navbar navbar-light bg-light">
                      <Link to="/" className='boton_contacto'>Inicio</Link>
                      <Link to="/componetes/Contact" className='boton_contacto'>Contacto</Link>
                      <Link to="/componetes/About" className='boton_contacto'>About</Link>
                  </nav>

              </div>
              </header>  



            
              
            

    </>
  )
}

export default Header   