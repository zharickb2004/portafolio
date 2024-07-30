import { useEffect, useState } from 'react';

const useScrollNavigation = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      const top = window.scrollY;

      sections.forEach((sec) => {
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveId(id);
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === activeId) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [activeId]);

  return { activeId };
};

export default useScrollNavigation;
