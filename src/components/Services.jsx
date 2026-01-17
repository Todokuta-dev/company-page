import WebDev from "../assets/webdev.jpg";
import IconCard from "../assets/accountability.jpg";
import AppCard from '../assets/appdev.jpg'
import TechIcon from '../assets/technical.jpg'
import DIgitalSol from '../assets/digsolution.jpg'
import ConsultingIcon from '../assets/consulting.jpg'
import "./Services.css";

export function Services() {
  return (
    <>
      <section className="services-section" id="services">
        <div className="services-header-div" data-aos="fade-up">
          <h3>What We Do</h3>
          <p>Comprehensive IT Solutions For Your Business</p>
        </div>
        <div className="services-card-div">
          <div className="services-card" data-aos="fade-up" data-aos-delay="100">
            <img className="card-icon" src={WebDev} alt="services icon" />
            <p className="service-title">Web Development</p>
            <p className="service-description">
              Custom websites built with modern technologies
            </p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-delay="200">
            <img className="card-icon" src={AppCard} alt="services icon" />
            <p className="service-title">Mobile App Development</p>
            <p className="service-description">
              Native and cross-platform mobile applications
            </p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-delay="300">
            <img className="card-icon" src={IconCard} alt="services icon" />
            <p className="service-title">UI/UX Design</p>
            <p className="service-description">
              Beautiful and intuitive user interface designs
            </p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-delay="100">
            <img className="card-icon" src={ConsultingIcon} alt="services icon" />
            <p className="service-title">IT Consulting</p>
            <p className="service-description">
              Expert guidance for your technology needs
            </p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-delay="200">
            <img className="card-icon" src={DIgitalSol} alt="services icon" />
            <p className="service-title">Digital Solutions</p>
            <p className="service-description">
              End-to-end digital transformation services
            </p>
          </div>
          <div className="services-card" data-aos="fade-up" data-aos-delay="300">
            <img className="card-icon" src={TechIcon} alt="services icon" />
            <p className="service-title">Technical Support</p>
            <p className="service-description">
              24/7 technical support for your system
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
