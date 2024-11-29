import PropTypes from 'prop-types';
import './style.css';

export function Slide({ images, currentIndex, onClose, setCurrentIndex }) {
  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1); 
    }
  };

  return (
    <div className="carousel-overlay">
      <div className="carousel-container">
        <button className="close-btn" onClick={onClose}>X</button>
        <div className="carousel-image">
          <img src={images[currentIndex]} alt="carousel" className="carousel-img" />
        </div>
        <div className="carousel-controls">
          <button onClick={prevImage} className="carousel-control prev"><i className="fa-solid fa-chevron-left"></i></button>
          <button onClick={nextImage} className="carousel-control next"><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
}

Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};
