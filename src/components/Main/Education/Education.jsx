import React from 'react'
import './education.css'


export const Education = () => {
  return (
    <section class="education" id="education">
    <h2 class="heading">Mi <span>Trayectoria</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
    <div class="education-row">
    <div class="education-column">
      <h3 class="title">Educacion <span className="animate scroll" style={{ '--i': 2 }}></span></h3>

      <div class="education-box">
        <div class="education-content">
          <div class="content">
            <div class="year"><i class='bx bxs-calendar' ></i>2020 - 2021</div>
            <h3>Tecnico en Programacion de Software</h3>
<p>Aprendí JavaScript, HTML, CSS y React, así como algoritmos, bases de datos y metodologías ágiles. Desarrollé aplicaciones web en proyectos prácticos y mejoré mis habilidades de comunicación y colaboración en equipo.</p>
          </div>
        </div>
        
        <div class="education-content">
          <div class="content">
            <div class="year"><i class='bx bxs-calendar' ></i>2022 - 2023</div>
            <h3>Tecnologo en Programacion de Software</h3>
            <p>Adquirí conocimientos en bases de datos, desarrollo frontend y backend. Aunque me especializo en el frontend, mi formación integral me proporciona una sólida comprensión del ciclo completo de desarrollo de software , donde aplico mis conocimientos para crear interfaces intuitivas y funcionales.</p>
          </div>
        </div>
        <span className="animate scroll" style={{ '--i': 3 }}></span>
      </div>
    </div>
    <div class="education-column">
      <h3 class="title">Experiencia        <span className="animate scroll" style={{ '--i': 5 }}></span></h3>

      <div class="education-box">
        <div class="education-content">
          <div class="content">
            <div class="year"><i class='bx bxs-calendar' ></i>2022 - 2023</div>
            <h3>Desarrollador web en TicPlat SAS</h3>
            <p>Me especialicé en la gestión de interfaces complejas, utilizando tecnologías como React para optimizar la visualización de grandes volúmenes de datos. Implementé técnicas avanzadas para mejorar el rendimiento de la interfaz, y coordiné con el equipo de QA para garantizar lanzamientos sin errores.
</p>
          </div>
        </div>
        <div class="education-content">
          <div class="content">
            <div class="year"><i class='bx bxs-calendar' ></i>2023 - 2023</div>
            <h3>Desarrollador Red de Servicios SA</h3>
            <p>Trabajé con diseñadores y desarrolladores backend para asegurar la integración efectiva entre frontend y backend en nuestras aplicaciones web. Además, lideré al equipo en la mejora continua del sistema de gestión de órdenes, enfocándome en su  adaptabilidad a las tendencias del mercado. 
</p>
          </div>
        </div>
        <span className="animate scroll" style={{ '--i': 6 }}></span>
      </div>
    </div>


    </div>

    </section>
  )
}