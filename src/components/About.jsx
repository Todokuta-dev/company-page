import HomeImg from "../assets/homeimg2.jpg";
import "./About.css";

export function About() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-header-div">
          <h3>Who We Are</h3>
          <p>Care to know more??</p>
        </div>
        <div className="about-company">
          <div className="about-text-div" data-aos="fade-right">
            <div className="about-badge">
              <span>💡 Our Story</span>
            </div>
            <p className="about-text">
              At Moonhill technology, we believe that technology should empower,
              not complicate. Founded with a mission to bridge the gap between
              complex tech solutions and real world business needs, we
              specialize in creating websites, mobile applications, and digital
              solutions that work seamlessly for our clients.
            </p>
            <p className="about-text">
              Our team of experienced developers and consultants works closely
              with businesses to understand thier unique challenges and deliver
              tailored IT solutions. We don't just build software, we build
              partnership that drive growth and innovations.
            </p>
            <p className="about-text">
              Whether you're a startup looking to establish your online presence
              or an established business seeking to modernize your systems,
              Moonhill Technology is here to make sure your technology works for
              you, not against you.
            </p>
          </div>
          <div className="about-img-div" data-aos="fade-left">
            <img className="about-img" src={HomeImg} alt="company-image" />
          </div>
        </div>
        <div className="about-stats-div">
          <div className="stats-card" data-aos="zoom-in" data-aos-delay="100">
            <span className="stats-emoji">😊</span>
            <h2 className="stats-number">30+</h2>
            <p className="stats-label">Happy Clients</p>
          </div>
          <div className="stats-card" data-aos="zoom-in" data-aos-delay="200">
            <span className="stats-emoji">🚀</span>
            <h2 className="stats-number">50+</h2>
            <p className="stats-label">Project Completed</p>
          </div>
          <div className="stats-card" data-aos="zoom-in" data-aos-delay="300">
            <span className="stats-emoji">⏰</span>
            <h2 className="stats-number">5+</h2>
            <p className="stats-label">Years Experience</p>
          </div>
          <div className="stats-card" data-aos="zoom-in" data-aos-delay="400">
            <span className="stats-emoji">👌</span>
            <h2 className="stats-number">100%</h2>
            <p className="stats-label">Client Satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
}
