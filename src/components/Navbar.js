import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


//import Navbar from './components/Navbar';





function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960 ) {
      setButton(false)
    } else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  },[]);

  window.addEventListener('resize', showButton);

  return (
     <>
     <nav className='navbar'>
      <div className='navbar-container'>
        <Link to = "/" className="navbar-logo" onClick={closeMobileMenu}>
          X <i className='fab fa-typo3' / >
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'xicon.png' : 'burger-bar.png'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            .me()
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
            .skills()
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
            .about()
              </Link>
          </li>
         
        </ul>
        {button && <Button buttonStyle='btn--outline'>X</Button>}
      </div>
     </nav>
     </>
 
  )
}

export default Navbar;
