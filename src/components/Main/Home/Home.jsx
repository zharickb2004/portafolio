import React from 'react';
import './home.css';
import perfilImg from '../../../assets/foto.jpeg';

export const Home = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-img">
        <img src={perfilImg} alt="imagen de perfil" />
        <span className="animate" style={{ '--i': 1 }}></span>
      </div>

      <div className="home-content">
        <h1>
          Hola, soy <span>Zharick Bautista</span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
          <span className="animate" style={{ '--i': 3 }}></span>
        </div>
        <p>
          Desarrolladora frontend con experiencia en la creación e implementación de interfaces de usuario intuitivas y atractivas. Habilidad en HTML, CSS, JavaScript y frameworks modernos como React. Fuerte enfoque en la optimización del rendimiento, accesibilidad y usabilidad de aplicaciones web.
        </p>
        <div className="home-sci">
          <a href="mailto:zharickdahiana2004@gmail.com"><i className='bx bxl-gmail'></i></a>
          <a href='https://github.com/zharickb2004'><i className='bx bxl-github'></i></a>
          <a href='https://www.linkedin.com/in/zharick-dahiana-bautista-cifuentes-a6467a31b/'><i className='bx bxl-linkedin'></i></a>
          <span className="animate" style={{ '--i': 5 }}></span>
        </div>
      </div>
    </section>
  );
};
