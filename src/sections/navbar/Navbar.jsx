import { useState } from "react";
import data from "./data";
import "./navbar.css";
import {
  RiGraduationCapFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiMenu3Fill,
  RiMenu5Fill,
} from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      {/* desktop */}

      <div className="container tn__container">
        <a href="index.html" className="nav__logo">
          <span>
            <RiGraduationCapFill size={33} />
          </span>{" "}
          ACHIEVERS ACADEMY
        </a>

        <div className="tn__social">
          <a href="">
            <RiFacebookBoxFill />
          </a>
          <a href="">
            <RiInstagramFill />
          </a>
          <a href="">
            <RiTwitterFill />
          </a>
          <a href="">
            <RiLinkedinFill />
          </a>
        </div>
      </div>
      <div className="container nav__container">
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className="nav__btn">Get Certified</button>
      </div>

      {/* {For mobile} */}

      <div className="nm__nav">
        <div className="container nm__container">
          <a href="index.html" className="nav__logo">
            <span>
              <RiGraduationCapFill size={33} />
            </span>
            ACHIEVERS ACDEMY
          </a>
          <ul
            className="nav__menu"
            style={{ transform: menuOpen && "translate(0%)" }}>
            {data.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="menu__btn">
            {!menuOpen ? (
              <RiMenu3Fill onClick={() => setMenuOpen(true)} />
            ) : (
              <RiMenu5Fill onClick={() => setMenuOpen(false)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
