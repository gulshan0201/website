import TeamCard from "../../components/TeamCard";
import { data } from "./data";
import "./team.css";

const Team = () => {
  return (
    <section id="team">
      <div className="title">
        <h2>Professional Intructors</h2>
        <p>
          Meet our dedicated professional educators, guiding, inspiring, and
          shaping futures through expertise and passion for teaching
        </p>
      </div>
      <div className="container team__container">
        {data.map((item) => (
          <TeamCard key={item.imgURL} {...item} />
        ))}
      </div>
    </section>
  );
};
export default Team;
