import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

export function Contacts() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        'service_hy5r3vp', //  Service ID
        'template_jr35qb5', //  Template ID
        form.current,
        'b7jwkQ20HfScnQYZq' //  Public Key
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      });
  };

  return (
    <section id="contacts" className="contact-section">
      <div className="contact-header">
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-subtitle">
          Let's build something amazing together
        </p>
      </div>

      <div className="contact-container">
        {/* Left side - Contact info */}
        <div className="contact-info" data-aos="fade-right">
          <h3 className="info-title">Let's Get In Touch</h3>
          <p className="info-description">
            We'd love to hear from you! Whether you have questions, feedback, or
            need support, feel free to reach out to us
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div className="contact-text">
                <p className="label">Email</p>
                <a href="mailto:moonhilltechnology@gmail.com">moonhilltechnology@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📞</span>
              <div className="contact-text">
                <p className="label">Phone</p>
                <a href="tel:+2348146054187">+234 8146054187</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="icon">📍</span>
              <div className="contact-text">
                <p className="label">Location</p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="contact-form-container" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="title"
                placeholder="Subject"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-textarea"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <p className="status-message success">
                Message sent successfully! ✅
              </p>
            )}
            {status === "error" && (
              <p className="status-message error">
                Failed to send. Please try again. ❌
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
