import CoursesCard from "../../components/CoursesCard";
import "./courses.css";
import {data} from './data';

const Courses = () => {
  return (
    <section id="courses">
      <div className="courses">
        <div className="title">
          <h2>Our Popular Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            assumenda quisquam. Dolorum facere cupiditate officia!
          </p>
        </div>
        <div className="container courses__container">
            {
                data.map((item) => (
                  <CoursesCard key={item} {...item} />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Courses;
