import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [button, setButton] = useState(true);
  const location = useLocation();

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  const navItems = [
    { path: '/', label: '.me()', icon: '⌂' },
    { path: '/skills', label: '.skills()', icon: '⚡' },
    { path: '/about', label: '.about()', icon: '◈' },
  ];

  return (
    <>
      {/* TOP NAVBAR - Desktop */}
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            X
          </Link>

          {/* Desktop Nav Links */}
          <ul className='nav-menu'>
            {navItems.map((item) => (
              <li key={item.path} className='nav-item'>
                <Link
                  to={item.path}
                  className={`nav-links ${location.pathname === item.path ? 'active-link' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {button && <Button buttonStyle='btn--outline'>X</Button>}
        </div>
      </nav>

      {/* BOTTOM TAB BAR - Mobile Only */}
      <nav className='bottom-tab-bar'>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`tab-item ${location.pathname === item.path ? 'tab-active' : ''}`}
          >
            <span className='tab-icon'>{item.icon}</span>
            <span className='tab-label'>{item.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

export default Navbar;