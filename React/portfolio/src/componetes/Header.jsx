
 import { Link } from 'react-router-dom';
import agu from '../assets/agu.jpg'

export const Header = () => {
  return (
    <>
            {/* <header id='header'>
                    <img id='foto_header' src={agu} alt="" /> 
              <div className='nav'>
                  <nav className="navbar navbar-light bg-light">
                      <Link to="/" className='boton_contacto'>Inicio</Link>
                      <Link to="/componetes/Contact" className='boton_contacto'>Contacto</Link>
                      <Link to="/componetes/About" className='boton_contacto'>About</Link>
                  </nav>
              </div>
              </header>   */}

         <header>
                  <div className="Logo_header">
                         <img src={agu} alt="" className='img_logo' />
                         <h2 className="nombre_portfolio">Mi Portfolio</h2>
                  </div>

                  <nav>
                        <Link to="/" className='link'>Inicio</Link>
                        <Link to="/componetes/Contact" className='link'>Contacto</Link>
                        <Link to="/componetes/About" className='link'>About</Link>
                  </nav>
          
        </header>     
        


            
              
            

    </>
  )
}

export default Header   