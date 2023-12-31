import Header from "./sections/header/Header";
import Navbar from "./sections/navbar/Navbar";
import Features from "./sections/features/Features";
import About from "./sections/about/About";
import Courses from "./sections/courses/Courses";
import Team from "./sections/team/Team";
import Testimonial from "./sections/testimonials/Testimonial";
import Footer from "./sections/Footer/Footer";
// import Copyright from "./sections/copyright/copyright";
import './index.css';


const App = () => {
  return (
   
    <main>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Courses />
      <Team />
      <Testimonial />
      <Footer />
      {/* <Copyright /> */}
    </main>
    
  );
};

export default App;
