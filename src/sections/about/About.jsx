import "./about.css";
import director from "../../assets/directer.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__image">
            <img src={director} alt="director image"/>
          </div>
        </div>
        <div className="about__right">
          <h3>Directors Message</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quasi
            praesentium, et veritatis quos, sapiente voluptatum pariatur
            corporis nulla aperiam dolore, odit voluptatibus odio unde. Numquam
            id quisquam totam consectetur nesciunt beatae error eveniet 
        </p>  
        </div>
      </div>
    </section>
  );
};

export default About;
