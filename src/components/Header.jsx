import CompanyIcon from '../assets/companyicon.jpg'
import "./Header.css";


export function Header() {
  return (
    <>
      <section className="header">
        <div className="img-name-div">
          <img
            className="company-icon"
            src= {CompanyIcon}
            alt="error loading img"
          />
          <h4 className="company-name">Moonhill Technology</h4>
        </div>
        <div className="nav-div" >
          <ul className="list-div">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contacts">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
