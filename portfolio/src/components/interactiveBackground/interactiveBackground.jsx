import './style.css';

export function InteractiveBackground() {



  return (
    <div className="background">
      <div className="shape circle" data-speed="3"></div>
      <div className="shape circle2" data-speed="3"></div>
      <div className="shape triangle" data-speed="6"></div>
      <div className="shape triangle2" data-speed="6"></div>
      <div className="shape square" data-speed="2"></div>
      <div className="shape square2" data-speed="2"></div>
    </div>
  );
}
