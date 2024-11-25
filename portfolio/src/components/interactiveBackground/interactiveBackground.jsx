import { useEffect, useRef } from 'react';
import './style.css';

export function InteractiveBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const items = containerRef.current.querySelectorAll('.shape');
      items.forEach((item) => {
        const speed = item.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed) / 50;
        const y = (window.innerHeight - e.pageY * speed) / 50;

        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="background" ref={containerRef}>
      <div className="shape circle" data-speed="3"></div>
      <div className="shape circle2" data-speed="3"></div>
      <div className="shape triangle" data-speed="6"></div>
      <div className="shape triangle2" data-speed="6"></div>
      <div className="shape square" data-speed="2"></div>
      <div className="shape square2" data-speed="2"></div>
    </div>
  );
}
