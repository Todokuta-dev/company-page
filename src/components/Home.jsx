import HomeImg from "../assets/homeimg.jpg";
import { ReactTyped } from "react-typed";
import "./Home.css";

export function Home() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content" data-aos="fade-right">
        <div className="hero-badge">
          <span>🚀 Innovate. Build. Scale.</span>
        </div>
        
        <h1 className="hero-title">
          Bridging the Gap Between Tech and{" "}
          <span className="highlight">Seamless</span> Innovation
        </h1>
        
        <div className="typed-container">
          <ReactTyped
            className="typed-text"
            strings={[
              "We Build Modern Websites",
              "We Create Mobile Apps",
              "We Deliver Digital Solutions",
              "IT Solutions For Your Business",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>
        
        <p className="hero-description">
          Tech doesn't have to feel like a different language. We built
          Moonhill Technology to make sure innovation works for you, your
          business, and your people.
        </p>
        
        <div className="hero-buttons">
          <a href="#contacts" className="btn-primary">
            Get Started
          </a>
          <a href="#services" className="btn-secondary">
            Our Services
          </a>
        </div>
      </div>
      
      <div className="hero-image-container" data-aos="fade-left">
        <img 
          className="hero-image" 
          src={HomeImg} 
          alt="Moonhill Technology - Digital Solutions" 
        />
      </div>
    </section>
  );
}