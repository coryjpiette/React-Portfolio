import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="nav nav-pills flex-column flex-sm-row col-sm-12 col-lg-9">
        <li className="flex-sm-fill text-sm-center">
          <NavLink
          exact
            to="/"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            About
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/portfolio"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Portfolio
          </NavLink>
        </li>
        <li className="flex-sm-fill text-sm-center">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName= "nav-link active"
          >
            Contact
          </NavLink>
        </li>
        <a
          className="flex-sm-fill text-sm-center nav-link resume"
          href={require("../assets/images/myresume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/resume-icon.png")}
            alt="resume"
            height="28"
            width="28"
            className="resume"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://github.com/coryjpiette/"
     
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/GitHub-icon.png")}
            alt="GitHub"
            height="25"
            width="25"
            className="github"
          />
        </a>
        <a
          className="flex-sm-fill text-sm-center nav-link"
          href="https://www.linkedin.com/"

          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/Linkedin.png")}
            alt="Linkedin"
            height="24"
            width="29"
            className="linkedin"
          />
        </a>
    </nav>
  );
}

export default Navbar;