import React, { useEffect, useState } from 'react';
import Swiper from 'swiper/bundle'; 
import 'swiper/css/bundle'; 
import './skills.css'; 

const skillsData = [
  { icon: 'bxl-react', name: 'React', example: 'Frontend Framework' },
  { icon: 'bxl-nodejs', name: 'Node.js', example: 'JavaScript Runtime' },
  { icon: 'bxl-tailwind-css', name: 'Tailwind CSS', example: 'Utility-First CSS Framework' },
  { icon: 'bxl-javascript', name: 'JavaScript', example: 'Programming Language' },
  { icon: 'bxl-figma', name: 'Figma', example: 'UI/UX Design Tool' },
  { icon: 'bxl-git', name: 'Git', example: 'Version Control' }
];

const SkillBox = ({ icon, name, example }) => (
  <div className="skill-boxmn">
    <div className="skill-icon">
      <i className={`bx ${icon}`}></i>
    </div>
    <div className="skill-info">
      <h4 className="skill-name">{name}</h4>
      <p className="skill-example">{example}</p>
    </div>
  </div>
);

export const Skills = () => {
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 462) {
        if (!isSwiperInitialized) {
          setIsSwiperInitialized(true);
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1, 
            centeredSlides: true,
            autoplay: {
              delay: 3000,
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      } else {
        setIsSwiperInitialized(false);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isSwiperInitialized]);

  return (
    <section className="skills" id="skills">
      <h2 className="skills-heading"> Mis <span>Tecnologías</span></h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {skillsData.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <SkillBox icon={item.icon} name={item.name} example={item.example} />
            </div>
          ))}
        </div>
        
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
      <div className="skills-row">
        {skillsData.map((item, index) => (
          <div className="skill-box" key={index}>
            <SkillBox icon={item.icon} name={item.name} example={item.example} />
          </div>
        ))}
      </div>
    </section>
  );
};
