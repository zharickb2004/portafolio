import React, { useEffect } from 'react';
import './header.css';
import useScrollNavigation from '../../hooks/useScrollNavigation.js';

export const Header = () => {
  const { activeId } = useScrollNavigation();

  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleMenuClick = () => {
      if (menuIcon && navbar) {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
      }
    };

    menuIcon?.addEventListener('click', handleMenuClick);

    const closeMenuOnLinkClick = () => {
      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };

    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', closeMenuOnLinkClick);
    });

    return () => {
      menuIcon?.removeEventListener('click', handleMenuClick);
      navbarLinks.forEach(link => {
        link.removeEventListener('click', closeMenuOnLinkClick);
      });
    };
  }, []);

  return (
    <header className="header">
      <a href='#home' className="logo">
        Zharick.
        <span className="animate" style={{ '--i': 1 }}></span>
      </a>
      <div className="bx bx-menu" id="menu-icon"> <span className="animate" style={{ '--i': 2 }}></span></div>
      <nav className="navbar">
        <a href="#home" className={activeId === 'home' ? 'active' : ''}>Inicio</a>
        <a href="#about" className={activeId === 'about' ? 'active' : ''}>Información</a>
        <a href="#education" className={activeId === 'education' ? 'active' : ''}>Educación</a>
        <a href="#skills" className={activeId === 'skills' ? 'active' : ''}>Habilidades</a>
        <span className="animate" style={{ '--i': 2 }}></span>
      </nav>
    </header>
  );
};
