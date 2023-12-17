// import React from "react"
import './footer.css';
import {RiGraduationCapFill} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__container">
        <div className="footer__container-box">
          <div className="footer__logo">
            <a href="index.html" className="footer__logo-box">
              <span>
                <RiGraduationCapFill size={33} />
              </span>
              ACHIEVERS ACADEMY
            </a>
          </div>
          <p>
          ACHIEVER EDUCATION SERVICES
          AN ISO 9001:2015 CERTIFIED ORGANISATION
          </p>
        </div>
        <div className="footer__container-box">
            <h4>Quick Links</h4>
            <div>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </div>
        </div>
        
        <div className="footer__container-box">
            <h4>Features</h4>
            <div>
                <li><a href="#">CAT</a></li>
                <li><a href="#">GATE</a></li>
                <li><a href="#">compititive Exams</a></li>
                <li><a href="#">terms & services</a></li>
                <li><a href="#">Testimonials</a></li>
            </div>
        </div>

        <div className="footer__container-box">
            <h4>Resources</h4>
            <div>
                <li><a href="#">Guides</a></li>
                <li><a href="#">Research</a></li>
                <li><a href="#">Experts</a></li>
                <li><a href="#">agencies</a></li>
            </div>
        </div>

        <div className="footer__container-box footer__contact">
            <h4>Contact US</h4>
            <div>
            <p><span>Address:</span>38 Roy Mallick Kolony, Opposite St. Marry School,</p>
            <p><span>Phone:</span>9038084007/9038084008</p>
            <p><span>Website:</span>www.achieveronline.in/</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
