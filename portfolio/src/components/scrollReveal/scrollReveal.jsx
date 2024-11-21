import { useEffect, useRef, useState } from "react";
import "./style.css";

export function ScrollReveal() {
  const revealRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(revealRef.current); 
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(revealRef.current);

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div
      className={`reveal-element ${inView ? "in-view" : ""}`}
      ref={revealRef}
    >
     
    </div>
  );
}
