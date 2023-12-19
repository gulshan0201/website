import "./about.css";
import director from "../../assets/directer.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__image">
            <img src={director} alt="director image" />
          </div>
        </div>
        <div className="about__right">
          <h3>Directors Message</h3>
          <p>
            Achievers academy like to teach students coming from any part of the
            society. Education should be universal and available to all we
            belive, if average student give good effort with proper guidence can
            do wonder in exams and career. Our mission is producings rankes in
            various exams and our vision is to provide excelence under various
            diversified fields.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
