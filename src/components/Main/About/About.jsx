import React from 'react'
import './about.css'
import perfilImgAvatar from '../../../assets/avatar1.webp';

import cv from '../../../assets/CV.pdf'


export const About = () => {
  
  return (
    <section class="about" id="about">
    <h2 class="heading">Sobre <span>Mí</span></h2>

    <div class="about-img">
    <img src={perfilImgAvatar} alt="imagen de perfil" />

    <span class="circle-spin"></span>
  
    </div>

    <div class="about-content">


<h3>Frontend Developer</h3>
<p>Soy una programadora frontend con experiencia en liderar la creación e implementación de interfaces de usuario intuitivas, accesibles y atractivas. Mi enfoque primordial es aportar al desarrollo de aplicaciones web modernas y receptivas, garantizando una experiencia de usuario excepcional y una alta performance en distintos dispositivos. He trabajado en la optimización del rendimiento, la accesibilidad y la usabilidad, asegurando que los productos sean escalables y puedan adaptarse a entornos cambiantes.

<p>
Estoy siempre en busca de aprender y me apasiona estar al tanto de las últimas tendencias  en desarrollo frontend. Estoy convencida de que mi combinación de habilidades técnicas y pasión por la creación de experiencias de usuario excepcionales me permite contribuir significativamente a cualquier equipo de desarrollo web.



</p>
<a href={cv} target="_blank" rel="noopener noreferrer" className="btn-download-cv">Abrir CV</a>

</p>
    </div>

    
    

    

    </section>
  )
}
