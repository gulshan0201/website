import "./testimonial.css";
import { data } from "./data";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="title">
        <h2>People Says</h2>

        <p>
          Your valuable insights pave the way for enhancements, ensuring that
          every interaction with us becomes more meaningful and enriching. We
          encourage you to take a moment to share your thoughts, suggestions, or
          appreciations – every comment is a stepping stone toward a better
          experience for you.
        </p>
      </div>
      <div className="container testimonial__container has-scrollbar">
        {data.map((item) => (
          <TestimonialCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
