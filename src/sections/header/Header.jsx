import "./header.css";
import { BiLogoPlayStore } from "react-icons/bi";
import { GrBook } from "react-icons/gr";

const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <h4>WARM WELCOME TO</h4>
        <h1>
          ACHIEVERS ACADEMY <br />
          Meets Opportunity
        </h1>
        <p>
        Education is the backbone of nations. A learning community dedicated to building respectful and responsible citizens and empowering all learners.
        </p>
        <div className="header__cta">
            <a href="https://iaxyj.on-app.in/app/home?orgCode=iaxyj&referrer=utm_source=copy-link&utm_medium=tutor-app-referral" className="header__btn">Download App <BiLogoPlayStore size={20}/> </a>
            <a href="https://iaxyj.courses.store/" className="header__btn">Our Courses <GrBook size={20} /> </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
