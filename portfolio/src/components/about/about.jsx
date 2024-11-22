import  { useState } from 'react';
import './style.css';
import { Story } from '../index';

export function About() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container-about">
      <div className="header">
        <p>Sur moi</p>
      </div>
      <div className={`title-about ${expanded ? 'expanded' : ''}`}>
        <h1 onClick={handleExpandClick}>Fabien Jégo</h1>
      </div>
      <div className={`story-content ${expanded ? 'expanded' : ''}`}>
        <Story />
      </div>
      <div className={`description ${expanded ? 'expanded' : ''}`}>
        <div className="container1">
          <span>Nom:</span>
          <font>Jégo</font>
        </div>
        <div className="container2">
          <span>E-mail:</span>
          <font>fabien.jego.p@gmail.com</font>
        </div>
      </div>
    </div>
  );
}
