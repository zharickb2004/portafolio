import React from 'react'
import './skills.css'


export const Skills = () => {
  return (
   <section class="skills" id="skills">
   <h2 class="heading"> Mis <span>Habilidades</span>        <span className="animate scroll" style={{ '--i': 1 }}></span></h2>
   <div class="skills-row">
   <div class="skills-column">
   <h3 class="title">Habilidades de Codificacion<span className="animate scroll" style={{ '--i': 2 }}></span></h3>

   <div class="skills-box">
    <div class="skills-content">
        <div class="progress">
            <h3>HTML/CSS <span>80%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>JavaScript <span>75%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>React.JS <span>70%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>Control de Versiones <span>80%</span></h3>
            <div class="bar"><span></span></div>
        </div>
    </div>
   <span className="animate scroll" style={{ '--i': 3 }}></span>
   </div>

   </div>


   <div class="skills-column">
   <h3 class="title">Habilidades Profesionales<span className="animate scroll" style={{ '--i': 5 }}></span></h3>

   <div class="skills-box">
    <div class="skills-content">
        <div class="progress">
            <h3>Diseño Web <span>75%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>Gestion de proyectos <span>80%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>Documentacion <span>80%</span></h3>
            <div class="bar"><span></span></div>
        </div>

        <div class="progress">
            <h3>Optimizacion <span>90%</span></h3>
            <div class="bar"><span></span></div>
        </div>
    </div>
    <span className="animate scroll" style={{ '--i': 6 }}></span>
   </div>

   </div>

   </div>

   </section>

  )
}
