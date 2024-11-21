
import './style.css';
import video from '../../assets/video/f.mp4';
import { Story } from '../index';

export function HomePage() {
  return (
    <div className="homePage">
        <div className="content">
      <video 
        src={video} 
        autoPlay 
        loop 
        muted 
        className="video-background"
      >
      </video>
      </div>
      <Story/>
    </div>
  );
}
