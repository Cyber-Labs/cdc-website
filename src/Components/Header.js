import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="sticky" >
        {" "}
        <div className="flex-container">
          <div className="image">
            {" "}
            <a href="https://www.iitism.ac.in/" target="_blank">
              <img
                className="img"
                src="https://www.iitism.ac.in/assets/img/ismlogo.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex-container2">
            <div className="L1">Career Development Cell</div>
            <div className="L2">
              Indian Institute Of Technology (Indian School Of Mines) Dhanbad
            </div>
          </div>
        </div>
        <div>
          <nav>
            <label htmlFor="show-menu" className="show-menu">Menu</label>
            <input type="checkbox" id="show-menu" role="button" />
            <ul className="header_nav">
              <li>
                <Link  className="link" to="/">Home</Link>
              </li>
              <li>
                <Link  className="link" to="/for-companies">For Companies</Link>
              </li>
              <li>
                <Link  className="link" to="/for-students">For Students</Link>
              </li>
              <li>
                <Link  className="link" to="/for-alumni">For Alumni</Link>
              </li>
              <li>
                <Link  className="link" to="/policies">Policies</Link>
              </li>
              <li>
                <Link  className="link" to="/placement-stats">Placement Stats</Link>
              </li>
              <li>
                <Link  className="link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    );
  }
}
export default Header;
